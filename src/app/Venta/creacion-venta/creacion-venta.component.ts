import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carrito } from '../../shared/models/carrito';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { VentasService } from '../../shared/service/ventas.service';
import { ClientesService } from '../../shared/service/clientes.service';
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
  inventarioFiltrado: any[] = [];
  carrito: Carrito[] = [];
  clientes: Clientes[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  total: number = 0;
  objeto: any;
  cantidad: number = 1;
  cliente: string = '';
  terminoBusqueda: string = '';

  constructor(
    private inventarioService: InvenatrioService,
    private detalleVentaService: DetalleventaService, 
    private ventasService: VentasService, 
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.getInventario();
    this.getClientes();
    this.actualizarTotal();
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
  
  filtrarInventario(busqueda: string): void {
    this.terminoBusqueda = busqueda;
    this.inventarioFiltrado = this.inventario.filter(libro =>
      libro.nombre_libro.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filtrarInventario(inputElement.value);
  }

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
          nombre: libroSeleccionado.nombre_libro,
          precio: libroSeleccionado.precio,
          cantidad: this.cantidad
        });
      }
  
      libroSeleccionado.existencias -= this.cantidad;
  
      const libro = {
        id_libro: libroSeleccionado.id,
        id_prestamo: 1,
        cantidad: this.cantidad,
        fecha: libroSeleccionado.Fecha_public,
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
    this.carrito.forEach(element => {
      this.ventasService.post(element).subscribe(
        () => alert('Venta realizada con éxito'),
        error => console.error('Error al realizar la venta', error)
      );
    });
    this.carrito = [];
    this.total = 0;
  }

  cancelarVenta(): void {
    this.carrito = [];
    this.total = 0;
  }
}
