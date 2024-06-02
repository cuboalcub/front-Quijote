import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {
  prestamos = [
    { idPrestamo: '1', idLibro: '1', idCliente: '1', cantidad: '2', fechaLimite: '2023-06-01' },
    { idPrestamo: '2', idLibro: '2', idCliente: '2', cantidad: '1', fechaLimite: '2023-06-15' },
    { idPrestamo: '3', idLibro: '3', idCliente: '3', cantidad: '3', fechaLimite: '2023-07-01' }
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

  borrarPrestamo() {
    if (this.filaSeleccionada !== null) {
      this.prestamos.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }
}

