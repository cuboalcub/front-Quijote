import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sucursale',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sucursale.component.html',
  styleUrl: './sucursale.component.css'
})
export class SucursaleComponent {
  sucursales = [
    { id: '1', nombre: 'Sucursal A', direccion: 'Calle 1, Ciudad A' },
    { id: '2', nombre: 'Sucursal B', direccion: 'Calle 2, Ciudad B' },
    { id: '3', nombre: 'Sucursal C', direccion: 'Calle 3, Ciudad C' }
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

  eliminarSucursal() {
    if (this.filaSeleccionada !== null) {
      this.sucursales.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }

  agregarSucursal() {
    const nuevaSucursal = { id: '4', nombre: 'Nueva Sucursal', direccion: 'Calle 4, Ciudad D' };
    this.sucursales.push(nuevaSucursal);
  }
}
