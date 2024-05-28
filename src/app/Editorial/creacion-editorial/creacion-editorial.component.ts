import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editorial } from '../../shared/models/editorial';
import { EditorialesService } from '../../shared/service/editoriales.service';
@Component({
  selector: 'app-creacion-editorial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './creacion-editorial.component.html',
  styleUrl: './creacion-editorial.component.css'
})
export class CreacionEditorialComponent {
  nombre: string = '';
  constructor(private editorialesService: EditorialesService) {}

  onSubmit(): void {  
    this.postData();
  }

  onCancel(): void {
    this.onReset();
  }

  postData(): void {
    const editorial: Editorial = {
      id: 0,
      nombre: this.nombre
    };
    this.editorialesService.post(editorial);
  }

  onReset(): void {
    this.nombre = '';
  }
}
