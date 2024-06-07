import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Prestamo } from '../../shared/models/prestamos';
import { PrestamosService } from '../../shared/service/prestamos.service';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {
  prestamos: Prestamo[] = [];

  constructor(private prestamosService: PrestamosService,
              private sesionstorageService: SesionstorageService    
  ) {}

  ngOnInit() {
    this.get()
  }
  get(): void {
    this.prestamosService.get().subscribe((prestamos: Prestamo[]) => {
      this.prestamos = prestamos;
    });
  }

  getid(id : number): void {
    this.sesionstorageService.set('detalleprestamo', id);
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

  borrarPrestamo() {
   
  }
}

