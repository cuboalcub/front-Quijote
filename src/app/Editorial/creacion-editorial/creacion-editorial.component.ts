import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editorial } from '../../shared/models/editorial';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-creacion-editorial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './creacion-editorial.component.html',
  styleUrl: './creacion-editorial.component.css'
})
export class CreacionEditorialComponent {
  nombre: String = "";
  constructor(private editorialesService: EditorialesService) {}

  onSubmit(): void {
    this.postData();
  }

  onCancel(): void {
    this.onReset();
  }

  postData(): void {
    const editorial = {
      nombre: this.nombre,
      estado: true,
    };

    this.editorialesService.post(editorial).subscribe({
      next: (response) => {
        alert('Editorial guardada con éxito');
        this.onReset();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al guardar la editorial:', error);
        alert('Ocurrió un error al guardar la editorial');
      }
    });
  }

  onReset(): void {
    this.nombre = '';
  }
}
