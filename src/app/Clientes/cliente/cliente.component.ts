import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Clientes } from '../../shared/models/cliente';
import { ClientesService } from '../../shared/service/clientes.service';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
constructor(private clientesService: ClientesService,
            private sesionstorageService: SesionstorageService
) {}
arrclientes: Clientes[] = [];
key = 'cliente';
ngOnInit(): void {
  this.getClientes();
}      

getClientes(): void {
  this.clientesService.get().subscribe((clientes: Clientes[]) => {
    this.arrclientes = clientes;
    console.log(clientes);
  });
}
getId(obj: Clientes): void {
  this.sesionstorageService.set(this.key, obj);
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

