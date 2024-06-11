import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carrito } from '../../shared/models/carrito';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { VentasService } from '../../shared/service/ventas.service';
import { ClientesService } from '../../shared/service/clientes.service';
import { DetalleVentaComponent } from '../../Prestamo/detalle-venta/detalle-venta.component';
import { Clientes } from '../../shared/models/cliente';

@Component({
  selector: 'app-creacion-venta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-venta.component.html',
  styleUrls: ['./creacion-venta.component.css']
})
export class CreacionVentaComponent implements OnInit {
  inventario: any[] = [];
  carrito: Carrito[] = [];
  clientes: Clientes[] = [];

  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  total: number = 0;
  objeto: any;
  cantidad: number = 1;
  cliente: number = 0;
  inventarioFiltrado: any[] = [...this.inventario];
  clientesFiltrados: Clientes[] = [...this.clientes];
  terminoBusqueda: string = '';
  DV: any[] = [];
  
  constructor(
    private inventarioService: InvenatrioService,
    private detalleVentaService: DetalleventaService, 
    private ventasService: VentasService, 
    private clientesService: ClientesService,
  ) { }

  ngOnInit(): void {
    this.getInventario();
    this.getClientes();
    this.actualizarTotal();
    this.inventarioFiltrado = [...this.inventario];
    this.clientesFiltrados = [...this.clientes]; 

    const inputNombreCliente: HTMLInputElement = document.getElementById("nombreCliente") as HTMLInputElement;
    inputNombreCliente.addEventListener("input", (event) => {
      this.onInputChange(event);
    });
    this.actualizarListaDesplegable(inputNombreCliente);
  }

  getClientes(): void {
    this.clientesService.get().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  getInventario(): void {
    this.inventarioService.get().subscribe((inventario:any[]) => {
      this.inventario = inventario;
      this.inventarioFiltrado = [...this.inventario]; // Inicializar inventarioFiltrado
    });
  }

  seleccionarFilaInventario(index: number, objeto: any): void {
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null;
    } else {
      this.filaSeleccionadaInventario = index;
      this.objeto = objeto;
    }
  }

  seleccionarFilaCarrito(index: number): void {
    if (this.filaSeleccionadaCarrito === index) {
      this.filaSeleccionadaCarrito = null; 
    } else {
      this.filaSeleccionadaCarrito = index;
    }
  }
  //filtrar un libro buscandolo por su nombre--------------------
  filtrarInventario(busqueda: string): void {
    this.terminoBusqueda = busqueda; 
    console.log('Buscando:', busqueda); 
    console.log('Inventario:', this.inventario); 
  
    this.inventarioFiltrado = this.inventario.filter(libro =>
      libro.nombre && libro.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    console.log('Resultado filtrado:', this.inventarioFiltrado); 
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filtrarInventario(inputElement.value);
  }
  //-------------------------------------------------

  // Función para actualizar las opciones de la lista desplegable
  actualizarListaDesplegable(input: HTMLInputElement): void {
    const listaClientes: HTMLSelectElement = document.getElementById("listaClientes") as HTMLSelectElement;
    listaClientes.innerHTML = ""; // Limpiar la lista desplegable
    const filtro: string = input.value.toLowerCase();
    const opcionesFiltradas: Clientes[] = this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(filtro));
    opcionesFiltradas.forEach(cliente => {
      const opcion: HTMLOptionElement = document.createElement("option");
      opcion.value = cliente.id.toString();
      opcion.textContent = cliente.nombre;
      listaClientes.appendChild(opcion);
    });
  }

  // Evento para detectar cambios en el campo de entrada y actualizar la lista desplegable
  onInputChange(event: Event): void {
    const inputNombreCliente: HTMLInputElement = event.target as HTMLInputElement;
    this.actualizarListaDesplegable(inputNombreCliente);
  }
  //-----------------------------------------------------
  
  actualizarTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  agregarDetalleVenta(): void {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventarioFiltrado[this.filaSeleccionadaInventario];
      const itemCarrito = this.carrito.find(item => item.id === libroSeleccionado.id);
  
      if (itemCarrito) {
        itemCarrito.cantidad += this.cantidad;
      } else {
        this.carrito.push({
          id: libroSeleccionado.id,
          nombre: libroSeleccionado.nombre,
          precio: libroSeleccionado.precio,
          cantidad: this.cantidad
        });
      }
      libroSeleccionado.existencias -= this.cantidad;
      
      this.ventasService.get().subscribe((inventario:any[]) => {
        this.DV = inventario;
      })
      let tamDV = this.DV.length + 1;
      const libro = {
        idVenta: tamDV,
        id_libro:libroSeleccionado.id,
        cantidad: this.cantidad,
        precio: libroSeleccionado.precio,
        subtotal: (libroSeleccionado.precio * this.cantidad),
        estado: true
      };
  
      this.detalleVentaService.post(libro).subscribe(
        () => alert('Libro agregado al carrito de compras'),
        error => {
          console.error(error);
          alert('Error al agregar el libro al carrito de compras');
        }
      );
  
      this.actualizarTotal();
    }
  }

  eliminarDelCarrito(): void {
    if (this.filaSeleccionadaCarrito !== null) {
      const itemEliminado = this.carrito[this.filaSeleccionadaCarrito];
      const libroEnInventario = this.inventario.find(libro => libro.id === itemEliminado.id);
  
      if (libroEnInventario) {
        libroEnInventario.existencias += itemEliminado.cantidad;
      } else {
        console.error('El libro no se encuentra en el inventario.');
        return;
      }
  
      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.detalleVentaService.delete(this.filaSeleccionadaCarrito + 1).subscribe(
        () => alert('Libro eliminado del carrito de compras'),
        error => {
          console.error(error);
          alert('Error al eliminar el libro del carrito de compras');
        }
      );

      this.filaSeleccionadaCarrito = null;
      this.actualizarTotal();
    }
  }

  confirmarVenta(): void {
    let cantidadtotal = 0
    this.carrito.forEach(item => {
      cantidadtotal += item.cantidad
    })
    const venta = {
      id_cliente: this.cliente,
      cantidad: cantidadtotal,
      total: this.total,
      estado:true
    }

    this.ventasService.post(venta).subscribe(
      
    )
  }

  cancelarVenta(): void {
    this.carrito = [];
    this.total = 0;
  }


}
