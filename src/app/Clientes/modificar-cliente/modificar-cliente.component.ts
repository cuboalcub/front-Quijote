import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../shared/service/clientes.service';
import { Clientes } from '../../shared/models/cliente';
import { LocalstorageService } from '../../shared/service/localstorage.service';
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
  constructor(private clientesService: ClientesService,
              private localstorageService: LocalstorageService
  ) {}
  id = this.localstorageService.obtenerDatos('id');

  onSubmit(): void {
    this.putData();
  }

  onCancel(): void {
    this.onReset();
  }

  putData(): void {
    this.id = this.localstorageService.obtenerDatos('idcliente');
    this.localstorageService.eliminarDatos("idcliente")
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
    this.nombre = '';
    this.telefono = '';
    this.direccion = '';
  }

}
