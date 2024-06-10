import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sucursal } from '../../shared/models/sucursal';
import { SucursalesService } from '../../shared/service/sucursales.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creacion-sucursal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-sucursal.component.html',
  styleUrl: './creacion-sucursal.component.css'
})
export class CreacionSucursalComponent {
  nombre = '';
  direccion = '';
  constructor(private sucursalesService: SucursalesService, private router: Router) { }
  onSubmit() {
    this.postData();
  }
  onCancel() {
    this.onReset();
  }
  postData() {
    console.log(this.direccion, this.nombre);
    
    const sucursal:any = {
      nombre_sucursal:this.nombre,
      direccion:this.direccion,
      estado:true
    }
    this.sucursalesService.post(sucursal).subscribe(
      (response) => {
        alert('Sucursal guardada con exito');
        this.onReset();

      },
      (error: HttpErrorResponse) => {
        console.error('Error al guardar la sucursal:', error);
        alert('Ocurrio un error al guardar la sucursal');
      }
    
    );
  }

  onReset() {
    this.direccion = '';
    this.nombre = '';
    this.router.navigate(['/sucursales']);
  }

}
