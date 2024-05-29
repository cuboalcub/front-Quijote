import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { Editorial } from '../../shared/models/editorial';
import { LocalstorageService } from '../../shared/service/localstorage.service';
@Component({
  selector: 'app-modificar-editorial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modificar-editorial.component.html',
  styleUrl: './modificar-editorial.component.css'
})
export class ModificarEditorialComponent {
  id: number = 0;
  nombre: string = '';
  constructor(private editorialesService: EditorialesService,
              private localstorageService: LocalstorageService) {}
OnSubmit(){
  this.putData()
}
OnCancel(){
  this.resetForm();
}
putData(){
  this.id = this.localstorageService.obtenerDatos('ideditorial');
  const editorial: any = {
    nombre: this.nombre,
    estado: true
  }
  this.editorialesService.update(this.id, editorial).subscribe();
  
}
resetForm(){
  this.nombre = '';
}
}