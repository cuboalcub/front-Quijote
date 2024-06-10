import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { Empleado } from '../../shared/models/empleados';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { SucursalesService } from '../../shared/service/sucursales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar-empleado.component.html',
  styleUrl: './modificar-empleado.component.css'
})
export class ModificarEmpleadoComponent {
  constructor(private sesionstorageService: SesionstorageService, private empleadosService: EmpleadoService, private routes: Router, private sucursalesService: SucursalesService) { }
  obj = this.sesionstorageService.get('empleado')
  nombre: string = this.obj?.nombre || '';
  telefono: number = this.obj?.telefono || 0;
  direccion: string = this.obj?.direccion || '';
  contraseña: string = this.obj?.contraseña || '';
  sucursal: string = '';
  id: number = this.obj?.id || 0;
  contrasenia: string = '';
  arrsucursales: any[] = [{
    id: 0,
    nombre_sucursal: 'a'
  }, {
    id: 0,
    nombre_sucursal: 'b'
  }];

  ngOnInit(): void {
    this.getSucursales()
  }
  onSubmit(): void {
  this.putData()
  }
  onCancel(): void {
    this.sesionstorageService.remove('empleado');
    this.routes.navigate(['/empleados']);
  }

  getSucursales() {
    this.sucursalesService.get().subscribe(
      (sucursal: any) => {
        this.arrsucursales = sucursal;
      }
    )
  }

  putData(): void {
    this.sesionstorageService.remove('idempleado');
    const empleado = {
      nombre_sucursal: this.sucursal,
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      contrasena: this.contrasenia,
      estado: true
    }
    this.empleadosService.update(empleado).subscribe(
      (response) => {
        alert('Empleado modificado con exito');
        this.routes.navigate(['/empleados']);
      },
      (error) => {
        alert('Error al modificar el empleado');
        console.log(error);
      }
    )
  }

  cancelar(): void {
    this.sesionstorageService.remove('idempleado');
    this.nombre = '';
    this.telefono = 0;
    this.direccion = '';
    this.routes.navigate(['/empleados']);
  }
}

