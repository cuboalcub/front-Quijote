import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Empleado } from '../../shared/models/empleados';
import { EmpleadoService } from '../../shared/service/empleado.service';
import { LocalstorageService } from '../../shared/service/localstorage.service';
@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
arr : Empleado[] = [];
constructor(private service: EmpleadoService,
            private local:LocalstorageService
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
}