import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SucursalesService } from '../../shared/service/sucursales.service';
import { Sucursal } from '../../shared/models/sucursal';
import { Empleado } from '../../shared/models/empleados';

@Component({
  selector: 'app-registro-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-empleados.component.html',
  styleUrl: './registro-empleados.component.css'
})
export class RegistroEmpleadosComponent {

  constructor(private empleadoService: EmpleadoService, private sucursalesService: SucursalesService, private route: Router) { }
  arrsucursales: Sucursal[] = [];
  nombre: string = ''
  telefono: number = 0
  sucursal: number = 0
  direccion: string = ''
  contrasenia: string = ''
  ngOnInit(): void {
    this.getSucursales();
  }
  getSucursales(): void {
    this.sucursalesService.get().subscribe({
      next: (response) => {
        this.arrsucursales = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al obtener las sucursales:', error);
      }
    });
  }
  onSubmit(): void {
    this.postData();
  }
  onCancel(): void {
    this.onReset();
  }
  postData(): void {
    console.log(this.sucursal); 
    
    const empleado: any = {
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion,
      sucursal: this.sucursal,
      contraseña: this.contrasenia,
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
    this.route.navigate( ['/empleados']);
  }
}
