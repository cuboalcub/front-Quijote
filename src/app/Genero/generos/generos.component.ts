import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {
  generos = [
    { id: '1', nombre: 'Romance' },
    { id: '2', nombre: 'Drama' },
    { id: '3', nombre: 'Ciencia Ficción' }
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
      this.generos.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }
}
