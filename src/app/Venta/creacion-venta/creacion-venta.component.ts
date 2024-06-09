import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { Carrito } from '../../shared/models/carrito';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { VentasService } from '../../shared/service/ventas.service';

@Component({
  selector: 'app-creacion-venta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-venta.component.html',
  styleUrls: ['./creacion-venta.component.css']
})
export class CreacionVentaComponent {
  
  constructor(private inventarioService: InvenatrioService, private detalleVentaService: DetalleventaService, private ventasService: VentasService) { }
  inventario: Inventario[] = [];
  carrito: Carrito[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  total: number = 0;
  objeto: any;
  cantidad: number = 1;

  ngOnInit(): void {
    this.actualizarTotal();
    this.getInventario();
  }
  getInventario(): void {
    this.inventarioService.get().subscribe((inventario: Inventario[]) => {
      this.inventario = inventario;
    }
    );
  }

  seleccionarFilaInventario(index: number, objeto: any) {
    console.log('Fila inventario seleccionada:', index);
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaInventario = index;
      this.objeto = objeto;
    }
  }

  seleccionarFilaCarrito(index: number) {
    console.log('Fila carrito seleccionada:', index);
    if (this.filaSeleccionadaCarrito === index) {
      this.filaSeleccionadaCarrito = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaCarrito = index;
    }
  }

  actualizarTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  agregarDetalleVenta() {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventario[this.filaSeleccionadaInventario];
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
        const libro = {
          id_libro: libroSeleccionado.id,
          id_prestamo: 1,
          cantidad:this.cantidad,
          fecha: libroSeleccionado.Fecha_public,
          estado: true
        }
        this.detalleVentaService.post(libro).subscribe((response) => {
          alert('Libro agregado al carrito de compras');
        });

      }

      this.actualizarTotal();
    }
  }

  eliminarDelCarrito() {
    if (this.filaSeleccionadaCarrito !== null) {
      console.log('Fila carrito eliminada:', this.filaSeleccionadaCarrito);
      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.detalleVentaService.delete(this.filaSeleccionadaCarrito+1).subscribe((response) => {
        alert('Libro eliminado del carrito de compras');
      },
      (error) => {
        console.error(error);
        alert('Error al eliminar el libro del carrito de compras');
      });
      this.filaSeleccionadaCarrito = null;
      this.actualizarTotal();
    }

  }

  confirmarVenta() {
    // Aquí iría la lógica para confirmar la venta
    console.log('Venta confirmada:', this.carrito);
    this.carrito.forEach(element => {
      this.ventasService.post(element).subscribe((response) => {
        alert('Venta realizada con exito');
      },
    )
    });
    this.carrito = [];
    this.total = 0;
  }

  cancelarVenta() {
    this.carrito = [];
    this.total = 0;
  }
}
