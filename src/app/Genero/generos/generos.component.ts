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
ngOnInit(): void {
  this.getGeneros();
}

getGeneros(): void {
  this.generosService.get().subscribe((generos) => {
    this.generos = generos;
  });
}

getid(id:number){
  this.sesionstorageService.set("idgenero",id)  
}


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
   
  }
}
