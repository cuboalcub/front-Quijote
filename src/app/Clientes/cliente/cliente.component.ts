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

arrclientes: Clientes[] = [{id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true},
  {id: 1, nombre: 'Estefania Rodriguez Barragan martinez', telefono: 'aaaaaaaaaaaaaaa', direccion: 'aaaaaaaaaaaaaaaaaaa', estado: true}
];

key = 'cliente';
id: number = 0;
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

seleccionarFila(index: number, id: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
      this.id = 0;
    } else {
      this.filaSeleccionada = index;
      this.id = id; 
    }
  }

  eliminarCliente() {
    if(this.filaSeleccionada !== null) {
      this.clientesService.delete(this.id).subscribe(
        (response) => {
        alert('Cliente eliminado con exito');
        this.filaSeleccionada = null;
        this.getClientes();
      },
      (error) => {
        alert('Error al eliminar el cliente');
        console.log(error);
      });
    }
  }
  
}