import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { Editorial } from '../../shared/models/editorial';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-editorial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modificar-editorial.component.html',
  styleUrl: './modificar-editorial.component.css'
})
export class ModificarEditorialComponent {
  obj = this.sesionstorageService.get('editorial');
  id: number = this.obj.id;
  nombre: string = this.obj.nombre;
  constructor(private editorialesService: EditorialesService,
              private sesionstorageService: SesionstorageService,
              private router: Router) {}
OnSubmit(){
  this.putData()
}
OnCancel(){
  this.resetForm();
}
putData(){
  this.sesionstorageService.remove('editorial');
  const editorial: Editorial = {
    id: this.id,
    nombre: this.nombre,
    estado: true
  }
  this.editorialesService.update(this.id, editorial)
  
}
resetForm(){
  this.sesionstorageService.remove('ideditorial');
  this.nombre = '';
  this.router.navigate(['/editoriales']);
}
}