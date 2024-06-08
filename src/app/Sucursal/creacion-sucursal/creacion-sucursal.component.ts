import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sucursal } from '../../shared/models/sucursal';
import { SucursalesService } from '../../shared/service/sucursales.service';
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
  constructor(private sucursalesService: SucursalesService) { }
  onSubmit() {
    this.postData();
  }
  onCancel() {
    this.onReset();
  }
  postData() {
    const sucursal:any = {
      nombre_sucursal:this.nombre,
      ubicacion:this.direccion
    }
    this.sucursalesService.post(sucursal).subscribe(
      (response) => {
        alert('Sucursal guardada con exito');
        this.onReset();
      }
    );
  }

  onReset() {
    this.direccion = '';
    this.nombre = '';
  }

}
