import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VentasService } from '../../shared/service/ventas.service';
import { Ventas } from '../../shared/models/ventas';
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  ventas: Ventas[] = [];
  constructor(private ventasService: VentasService) {}
  ngOnInit(): void {
  this.get()
  }

  get(): void {
    this.ventasService.get().subscribe((ventas: Ventas[]) => {
      this.ventas = ventas;
    });
  }
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


}
