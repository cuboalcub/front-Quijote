import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { ClientesService } from '../../shared/service/clientes.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { Carrito } from '../../shared/models/carrito';
import { DetalleprestamoService } from '../../shared/service/detalleprestamo.service';
import { Router } from '@angular/router';
import { PrestamosService } from '../../shared/service/prestamos.service';
@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-prestamos.component.html',
  styleUrls: ['./creacion-prestamos.component.css']
})
export class CreacionPrestamosComponent implements OnInit {
  inventario: any[] = [];
  clientes: any[] = [];
  carrito: Carrito[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  cantidad: number = 1;
  maxLibros: number = 3;
  DP: any[] = [];
  inventarioFiltrado: any[] = [...this.inventario];
  terminoBusqueda: string = '';
  cliente: number = 0;
  fechaLimite: string = '';
  clientesFiltrados: any[] = [...this.clientes];

  constructor(
    private inventarioService: InvenatrioService,
    private clientesService: ClientesService,
    private detalleprestamo: DetalleprestamoService,
    private prestamosService: PrestamosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInventario();
    this.getClientes();
    this.inventarioFiltrado = [...this.inventario];
    this.clientesFiltrados = [...this.clientes]; 

    const inputNombreCliente: HTMLInputElement = document.getElementById("nombreCliente") as HTMLInputElement;
    inputNombreCliente.addEventListener("input", (event) => {
      this.onInputChange(event);
    });
    this.actualizarListaDesplegable(inputNombreCliente);
  }

  getInventario(): void {
    this.inventarioService.get().subscribe(
      (inventario) => {
        this.inventario = inventario;
        this.inventarioFiltrado = [...this.inventario];
      },
      (error) => console.error('Error al obtener el inventario:', error)
    );
  }

  getClientes(): void {
    this.clientesService.get().subscribe(
      (cliente) => {
        this.clientes = cliente;
      }
    );
  }

  seleccionarFilaInventario(index: number): void {
    this.filaSeleccionadaInventario = this.filaSeleccionadaInventario === index ? null : index;
  }

  seleccionarFilaCarrito(index: number): void {
    this.filaSeleccionadaCarrito = this.filaSeleccionadaCarrito === index ? null : index;
  }

  agregarAlCarrito(): void {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventarioFiltrado[this.filaSeleccionadaInventario];
      const cantidadTotal = this.carrito.reduce((total, item) => total + item.cantidad, 0);

      if (cantidadTotal + this.cantidad > this.maxLibros) {
        alert('No puedes agregar más de 3 libros al carrito.');
        return;
      }

      const itemCarrito = this.carrito.find(item => item.id === libroSeleccionado.id);

      if (itemCarrito) {
        itemCarrito.cantidad += this.cantidad;
      } else {
        this.carrito.push({
          id: libroSeleccionado.id,
          nombre: libroSeleccionado.nombre_libro,
          precio: libroSeleccionado.precio,
          cantidad: this.cantidad
        });
      }

      libroSeleccionado.existencias -= this.cantidad;
      this.inventarioFiltrado = [...this.inventario];
      
      this.detalleprestamo.get().subscribe((detalleprestamo: any[]) => {
        this.DP = detalleprestamo
      })

      const libro = {
        id_libro: libroSeleccionado.id,
        idPrestamo: this.DP.length + 1,
        cantidad: this.cantidad,
        fecha: this.fechaLimite,
        estado: true,
      }

      this.detalleprestamo.post(libro).subscribe(
        (response) => {
          console.log('Libro registrado exitosamente:', response);
        },
        (error) => console.error('Error al registrar el libro:', error)
      );

    }
  }

  eliminarDelCarrito(): void {
    if (this.filaSeleccionadaCarrito !== null) {
      const itemEliminado = this.carrito[this.filaSeleccionadaCarrito];
      const libroEnInventario = this.inventario.find(libro => libro.id === itemEliminado.id);

      if (libroEnInventario) {
        libroEnInventario.existencias += itemEliminado.cantidad;
      }
      this.detalleprestamo.delete(this.filaSeleccionadaCarrito+1).subscribe(
        (response) => {
          console.log('Libro eliminado exitosamente:', response);
        },
        (error) => console.error('Error al eliminar el libro:', error)
      )
      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.filaSeleccionadaCarrito = null;

    }
  }

  cantidadTotalEnCarrito(): number {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  }

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



actualizarListaDesplegable(input: HTMLInputElement): void {
  const listaClientes: HTMLSelectElement = document.getElementById("listaClientes") as HTMLSelectElement;
  listaClientes.innerHTML = ""; // Limpiar la lista desplegable
  const filtro: string = input.value.toLowerCase();
  const opcionesFiltradas: any[] = this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(filtro));
  opcionesFiltradas.forEach(cliente => {
    const opcion: HTMLOptionElement = document.createElement("option");
    opcion.value = cliente.id.toString();
    opcion.textContent = cliente.nombre;
    listaClientes.appendChild(opcion);
  });
}


onInputChange(event: Event): void {
  const inputNombreCliente: HTMLInputElement = event.target as HTMLInputElement;
  this.actualizarListaDesplegable(inputNombreCliente);
}
confirmarPrestamo(): void {
  let libro: number = 0;
  this.carrito.forEach(item => {
    libro += item.cantidad
  })
  
  const librosPrestados = {
    id_cliente: this.cliente,
    cantidad: libro,
    estado: true
  }
  this.detalleprestamo.post(librosPrestados).subscribe(
    (response) => {
      console.log('Prestamo registrado exitosamente:', response);
    },
    (error) => console.error('Error al registrar el prestamo:', error)
  )
}
cancelarPrestamo(): void {
  let idPrestamo = this.DP.length + 1
  this.prestamosService.cancelar(idPrestamo).subscribe(
    (response) => {
      console.log('Prestamo cancelado exitosamente:', response);
    },
    (error) => console.error('Error al cancelar el prestamo:', error)
  )
  this.router.navigate(['/prestamos']);
}


}