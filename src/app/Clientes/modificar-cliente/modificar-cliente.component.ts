import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../shared/service/clientes.service';
import { Clientes } from '../../shared/models/cliente';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.css'
})
export class ModificarClienteComponent {
  obj = this.sesionstorageService.get("cliente");
  nombre: string = this.obj?.nombre || '';
  telefono: string = this.obj?.telefono || '';
  direccion: string = this.obj?.direccion || '';
  id: number = this.obj.id;
  constructor(private clientesService: ClientesService,
              private sesionstorageService: SesionstorageService,
              private routes: Router
  ) {}
  onSubmit(): void {
    this.putData();
  }

  onCancel(): void {
    this.onReset();
  }

  putData(): void {
    this.sesionstorageService.remove("cliente");
    const cliente: Clientes = {
      id: this.id,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      estado: true
    }
    this.clientesService.update(cliente).subscribe(
      (response) => {
        alert('Cliente modificado con exito');
        this.routes.navigate(['/cliente']);
      },
      (error) => {
        alert('Error al modificar el cliente');
        console.log(error);
      }
    )
  }

  onReset(): void {
    this.sesionstorageService.remove("idcliente");
    this.routes.navigate(['/cliente']);
  }

}
