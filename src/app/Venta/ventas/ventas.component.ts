import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VentasService } from '../../shared/service/ventas.service';
import { Ventas } from '../../shared/models/ventas';
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  ventas = [
    { id: '1', fechaVenta: '2023-01-01', cliente: 'Juan Luis', subtotal: '100', total: '110' },
    { id: '2', fechaVenta: '2023-02-01', cliente: 'Arni Moreno', subtotal: '150', total: '165' },
    { id: '3', fechaVenta: '2023-03-01', cliente: 'Uri Martinez', subtotal: '200', total: '220' }
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

  eliminarVenta() {
    if (this.filaSeleccionada !== null) {
      this.ventas.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }

  nuevaVenta() {
    const nuevaVenta = { id: '4', fechaVenta: '2023-04-01', cliente: 'Nuevo Cliente', subtotal: '120', total: '132' };
    this.ventas.push(nuevaVenta);
  }
}
