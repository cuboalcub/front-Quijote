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
  obj = this.sesionstorageService.get('sucursale')
  
  id = this.obj.id;
  nombre: string = "a" ;
  direccion: string = this.obj.ubicacion; 

  ngOnInit(): void {
    console.log(this.obj.id);
  }
  onSubmit(): void {
    this.postData();
  }

  onCancel(): void {
  }

  postData(): void {
    const sucursal: Sucursal = {
      id: this.id,
      nombre_sucursal: this.nombre,
      ubicacion: this.direccion,
      estado: true
    };
    this.sucursalesService.update(sucursal.id,sucursal).subscribe(() => {
      this.router.navigate(['/sucursale']);
    });
  }

}
