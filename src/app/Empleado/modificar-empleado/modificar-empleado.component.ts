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
  obj = this.sesionstorageService.get('empleado')
  nombre: string = this.obj?.nombre || '';
  telefono: number = this.obj?.telefono || 0;
  direccion: string = this.obj?.direccion || '';
  contraseña: string = this.obj?.contraseña || '';
  id: number = this.obj?.id || 0;

  onSubmit(): void {
  this.putData()
  }
  onCancel(): void {
    this.sesionstorageService.remove('empleado');
    this.routes.navigate(['/empleados']);
  }

  putData(): void {
    this.sesionstorageService.remove('idempleado');
    const empleado: Empleado = {
      id: this.id,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      contraseña: this.contraseña,
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

