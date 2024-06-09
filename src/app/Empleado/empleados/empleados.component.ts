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
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
arr : Empleado[] = [];
id: number = 0;
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
getid(empleado: Empleado){
  this.sesionstorageService.set("empleado",empleado)
}
  filaSeleccionada: number | null = null;

  seleccionarFila(index: number, id: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
      this.id = id;
    }
  }

  eliminarFila() {
    if (this.filaSeleccionada !== null) {
      this.service.delete(this.id).subscribe(
        (response) => {
          alert('Empleado eliminado con exito');
          this.gettable();
        },
        (error) => {
          alert('Error al eliminar el empleado');
          console.log(error);
        }
      );
  }else{
    alert('Fila no seleccionada');
  }
  }
}