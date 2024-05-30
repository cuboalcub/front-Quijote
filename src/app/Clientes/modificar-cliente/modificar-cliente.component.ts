import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../shared/service/clientes.service';
import { Clientes } from '../../shared/models/cliente';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
@Component({
  selector: 'app-modificar-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.css'
})
export class ModificarClienteComponent {
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';
  id: number = 0;
  constructor(private clientesService: ClientesService,
              private sesionstorageService: SesionstorageService,
  ) {}
  onSubmit(): void {
    this.putData();
  }

  onCancel(): void {
    this.onReset();
  }

  putData(): void {
    this.id = this.sesionstorageService.get("idcliente");
    this.sesionstorageService.remove("idcliente");
    const cliente: Clientes = {
      id: this.id,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      estado: true
    }
    this.clientesService.update(this.id,cliente)
  }

  onReset(): void {
    this.sesionstorageService.remove("idcliente");
    this.nombre = '';
    this.telefono = '';
    this.direccion = '';
  }

}
