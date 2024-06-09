import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Sucursal } from '../../shared/models/sucursal';
import { SucursalesService } from '../../shared/service/sucursales.service';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';

@Component({
  selector: 'app-modificar-sucursal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar-sucursal.component.html',
  styleUrl: './modificar-sucursal.component.css'
})
export class ModificarSucursalComponent {

  constructor(private sucursalesService: SucursalesService, private sesionstorageService: SesionstorageService, private router: Router) { }
  obj: Sucursal = this.sesionstorageService.get('sucursal');
  id: number = this.obj.id;
  nombre: string = this.obj?.nombre_sucursal || '';
  direccion: string = this.obj?.direccion || '';
  onSubmit(): void {
    this.postData();
  }

  onCancel(): void {
  }

  postData(): void {
    const sucursal: Sucursal = {
      id: this.id,
      nombre_sucursal: this.nombre,
      direccion: this.direccion,
      estado: true
    };
    this.sucursalesService.update(sucursal).subscribe(() => {
      this.router.navigate(['/sucursale']);
    });
  }

}
