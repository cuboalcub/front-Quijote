import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { Empleado } from '../../shared/models/empleados';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar-empleado.component.html',
  styleUrl: './modificar-empleado.component.css'
})
export class ModificarEmpleadoComponent {
  constructor(private sesionstorageService: SesionstorageService, private empleadosService: EmpleadoService, private routes: Router) { }
  nombre: string = '';
  telefono: number = 0;
  direccion: string = '';
  id: number = 0;

  onSubmit(): void {
  this.putData()
  }
  onCancel(): void {

  }

  putData(): void {
    this.id = this.sesionstorageService.get('idempleado');
    this.sesionstorageService.remove('idempleado');
    const empleado: Empleado = {
      id: this.id,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      estado: true
    }
    this.empleadosService.update(this.id,empleado)
  }

  cancelar(): void {
    this.sesionstorageService.remove('idempleado');
    this.nombre = '';
    this.telefono = 0;
    this.direccion = '';
    this.routes.navigate(['/empleados']);
  }
}

