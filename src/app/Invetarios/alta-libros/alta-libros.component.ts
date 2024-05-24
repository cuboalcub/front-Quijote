import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { GenerosService } from '../../shared/service/generos.service';
import { Genero } from '../../shared/models/genero';
@Component({
  selector: 'app-alta-libros',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './alta-libros.component.html',
  styleUrl: './alta-libros.component.css'
})
export class AltaLibrosComponent {
constructor(private inventarioService: InvenatrioService,
            private Genero : GenerosService 
            ) {}

arr: Genero[] = [];
ngOninit(){
  this.getGeneros();
}
  getGeneros():void{
    this.Genero.getTablas()
    .subscribe(
      (Genero:Genero[]) => {
        this.arr = Genero;
      })
  }
  nombre: string = '';
  fecha: string = '';
  cantidad: number = 0;
  precio: number = 0;
  genero: string = '';
  onSubmit() {
    console.log(this.nombre, this.fecha, this.cantidad, this.precio, this.genero);
    
  }
  onCancel() {
    this.resetForm();
  }
  resetForm() {
    this.nombre = '';
    this.fecha = '';
    this.cantidad = 0;
    this.precio = 0;
    this.genero = '';
  }
}
