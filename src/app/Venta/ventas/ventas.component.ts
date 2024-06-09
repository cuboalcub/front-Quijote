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
  id: number = 0;
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

  seleccionarFila(index: number, id: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
      this.id   = id;
    }
  }

  eliminarVenta() {
    if (this.filaSeleccionada !== null) {
      this.ventasService.delete(this.id).subscribe(
        Response => {
        alert('Venta eliminada con exito');
        this.get();
      }, error => {
        alert('Error al eliminar la venta');
        console.log(error);
      });
    }
    else {
      alert('Fila no seleccionada');
    }
  }


}
