import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventario = [
    { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
    { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
    { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' }
  ];

  filaSeleccionada: number | null = null;

  seleccionarFila(index: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
    }
  }

  eliminarFila() {
    if (this.filaSeleccionada !== null) {
      this.inventario.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }

  
}

