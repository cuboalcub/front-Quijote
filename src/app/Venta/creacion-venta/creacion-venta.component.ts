import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creacion-venta',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './creacion-venta.component.html',
  styleUrl: './creacion-venta.component.css'
})
export class CreacionVentaComponent {
  
  inventario = [
    { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
    { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
    { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' }
  ];

  carrito = [
    { id: '1', nombre: 'Libro A', precio: '100', cantidad: '1' },
    { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' }
  ];

  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  subtotal: number = 0;


  seleccionarFilaInventario(index: number, objeto: any) {
    console.log(objeto);
    
    console.log('Fila inventario seleccionada:', index);
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaInventario = index;
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
}
