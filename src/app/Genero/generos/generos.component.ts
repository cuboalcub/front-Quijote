import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../../shared/service/generos.service';
import { Genero } from '../../shared/models/genero';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {
constructor(private generosService: GenerosService, private sesionstorageService: SesionstorageService ) {}
generos: Genero[] = [];
id: number = 0;
ngOnInit(): void {
  this.getGeneros();
}

getGeneros(): void {
  this.generosService.get().subscribe((generos) => {
    this.generos = generos;
  });
}

getid(genero: Genero) {
  this.sesionstorageService.set("genero", genero);  
}


  filaSeleccionada: number | null = null;

  seleccionarFila(index: number, id: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
      this.id   = id;
    }
  }

  eliminarFila() {
  if (this.filaSeleccionada !== null) {
    this.generosService.delete(this.id).subscribe(
      Response => {
      alert('Genero eliminado con exito');
      this.filaSeleccionada = null;
      this.getGeneros();
    }, error => {
      alert('Error al eliminar el genero');
      console.log(error);
    });
  }
  else {
    alert('Fila no seleccionada');
  }
}
}