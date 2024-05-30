import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clientes = [
    { id: '1', nombre: 'Juan Pérez', telefono: '555-1234', direccion: 'Calle Falsa 123' },
    { id: '2', nombre: 'María López', telefono: '555-5678', direccion: 'Avenida Siempre Viva 742' },
    { id: '3', nombre: 'Carlos García', telefono: '555-8765', direccion: 'Boulevard de los Sueños 456' }
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
      this.clientes.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }
  
}

