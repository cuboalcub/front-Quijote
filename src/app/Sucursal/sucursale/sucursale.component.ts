import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { SucursalesService } from '../../shared/service/sucursales.service'; 
import { Sucursal } from '../../shared/models/sucursal';
@Component({
  selector: 'app-sucursale',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sucursale.component.html',
  styleUrl: './sucursale.component.css'
})
export class SucursaleComponent {

constructor(private sucursalesService: SucursalesService,private sesionstorageService: SesionstorageService) { }

arrsucursales: Sucursal[] = [];
ngOnInit(): void {
  this.get();
}
get(): void {
  this.sucursalesService.get().subscribe((sucursales : Sucursal[]) => {
    this.arrsucursales = sucursales;
  });
}


getid( sucursal: Sucursal): void {  // Prevenir la propagación del evento
  console.log(sucursal);
  this.sesionstorageService.set('sucursal', sucursal);
  
  }

  sucursales: Sucursal[] = [
    { id: 1, nombre_sucursal: 'Sucursal A', ubicacion: 'Calle 1, Ciudad A',estado:true },
    { id: 2, nombre_sucursal: 'Sucursal B', ubicacion: 'Calle 2, Ciudad B',estado:true },
    { id: 3, nombre_sucursal: 'Sucursal C', ubicacion: 'Calle 3, Ciudad C',estado:true }
  ];

  filaSeleccionada: number | null = null;

  seleccionarFila(index: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
    }
  }

  eliminarSucursal() {
    if (this.filaSeleccionada !== null) {
      this.sucursales.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }

}
