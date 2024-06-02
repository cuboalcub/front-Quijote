import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Empleado } from '../../shared/models/empleados';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
arr : Empleado[] = [];
constructor(private service: EmpleadoService,
            private sesionstorageService: SesionstorageService
) {}
ngOnInit(): void {
  this.gettable();
}
gettable(){
  this.service.get().subscribe(
    (Empleado : Empleado[]) => {
      this.arr = Empleado; 
    }
  )
}
getid(id:number){
  this.sesionstorageService.set("idempleado",id)
  empleados = [
    { id: '1', nombre: 'Fany Rodriguez', telefono: '333-3333', direccion: 'El trebol Norte 1' },
    { id: '2', nombre: 'Emiliano Torales', telefono: '555-6666', direccion: 'Fracc Villas de Orizaba' },
    { id: '3', nombre: 'Felipe Abisai', telefono: '222-2222', direccion: 'Peñuela' }
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

  eliminarFila() {
    if (this.filaSeleccionada !== null) {
      this.empleados.splice(this.filaSeleccionada, 1);
      this.filaSeleccionada = null; // Resetea la selección
    }
  }
}

}