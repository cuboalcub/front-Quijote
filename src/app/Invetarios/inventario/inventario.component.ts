
import { Component} from '@angular/core';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { Inventario } from '../../shared/models/inventario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'] // Corrección aquí: 'styleUrls' en lugar de 'styleUrl'
})
export class InventarioComponent { // Implementar OnInit
  arrInventarios: Inventario[] = [];

  constructor(private inventarioService: InvenatrioService) {} // Nombre corregido

  ngOnInit(): void { 
    this.get();
   }

  get(): void {
    this.inventarioService.get().subscribe((inventarios) => {
      this.arrInventarios = inventarios;
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

  eliminarFila() {
   
  }

  
}

