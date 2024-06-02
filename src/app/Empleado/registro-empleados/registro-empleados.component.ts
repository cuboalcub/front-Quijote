import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.empleadoService.post(empleado).subscribe({
      next: (response) => {
        alert('Editorial guardada con éxito');
        this.onReset();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al guardar la editorial:', error);
        alert('Ocurrió un error al guardar la editorial');
      }
    });;
  }
  onReset(): void {
    this.nombre = '';
    this.telefono = 0;
    this.direccion = '';
  }
}
