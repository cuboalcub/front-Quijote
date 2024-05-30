import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../shared/service/empleado.service';

@Component({
  selector: 'app-registro-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-empleados.component.html',
  styleUrl: './registro-empleados.component.css'
})
export class RegistroEmpleadosComponent {

  constructor(private empleadoService: EmpleadoService) { }

  nombre: string = ''
  telefono: number = 0
  sucursal: number = 0
  direccion: string = ''
  onSubmit(): void {
    this.postData();
  }
  onCancel(): void {
    this.onReset();
  }
  postData(): void {
    const empleado: any = {
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      estado: true
    }
    this.empleadoService.post(empleado);
  }
  onReset(): void {
    this.nombre = '';
    this.telefono = 0;
    this.direccion = '';
  }
}
