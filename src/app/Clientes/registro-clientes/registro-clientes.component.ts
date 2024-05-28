import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Clientes } from '../../shared/models/cliente';
import { ClientesService } from '../../shared/service/clientes.service';

@Component({
  selector: 'app-registro-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-clientes.component.html',
  styleUrl: './registro-clientes.component.css'
})
export class RegistroClientesComponent {
constructor(private clientesService: ClientesService) {}
nombre: string = '';
telefono: string = '';
direccion: string = '';
  onSubmit(): void {
    this.postData();
  }

  onCancel(): void {
    this.onReset();
  }

  postData(): void {

    const cliente: Clientes = {
      id: 0,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      estado: true
    }
    this.clientesService.post(cliente);
  }

  onReset(): void {
    this.nombre = '';
    this.telefono = '';
    this.direccion = '';
  }


}
