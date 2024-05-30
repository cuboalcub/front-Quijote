import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenerosService } from '../../shared/service/generos.service';
import { Genero } from '../../shared/models/genero';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-genero',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modificar-genero.component.html',
  styleUrl: './modificar-genero.component.css'
})
export class ModificarGeneroComponent {

  constructor(private generosService: GenerosService, private sesionstorageService: SesionstorageService,private router: Router) { }
  nombre: string = '';

  onSubmit(): void {
    this.putData();
  }

  onCancel(): void {
    this.onReset();
  }

  putData(): void {
    const genero: Genero = {
      id: this.sesionstorageService.get("idgenero"),
      nombre: this.nombre,
      estado: true
    };
    this.generosService.update(genero.id, genero).subscribe();
  }

  onReset(): void {
    this.nombre = '';
    this.router.navigate(['/generos']);
  }
}
