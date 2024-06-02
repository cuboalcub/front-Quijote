import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editoriales.component.html',
  styleUrl: './editoriales.component.css'
})
export class EditorialesComponent {
  editoriales = [
    { id: '1', nombre: 'Editorial Alfa' },
    { id: '2', nombre: 'Editorial Beta' },
    { id: '3', nombre: 'Editorial Gamma' }
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
      this.editoriales.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }
}
