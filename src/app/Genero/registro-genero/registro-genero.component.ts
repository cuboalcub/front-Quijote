import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenerosService } from '../../shared/service/generos.service';
import { Genero } from '../../shared/models/genero';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro-genero',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './registro-genero.component.html',
  styleUrl: './registro-genero.component.css'
})
export class RegistroGeneroComponent {

  constructor(private generosService: GenerosService) { }

  nombre: String = "";
  onSubmit(): void {
    this.postData();
  }

  onCancel(): void {
    this.onReset();
  }

  postData(): void {
    const genero: any = {
      nombre: this.nombre,
      estado: true
    }

    this.generosService.post(genero).subscribe({
      next: (response) => {
        alert('Genero guardado con exito');
        this.onReset();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al guardar el genero:', error);
        alert('Ocurrio un error al guardar el genero');
      }
    });}

  onReset(): void {
    this.nombre = '';
  }
}
