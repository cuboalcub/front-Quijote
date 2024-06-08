import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { GenerosService } from '../../shared/service/generos.service';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { SucursalesService } from '../../shared/service/sucursales.service';
import { Sucursal } from '../../shared/models/sucursal';
import { Genero } from '../../shared/models/genero';
import { Editorial } from '../../shared/models/editorial';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-alta-libros',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './alta-libros.component.html',
  styleUrl: './alta-libros.component.css'
})
export class AltaLibrosComponent {
constructor(private inventarioService: InvenatrioService,
            private Genero : GenerosService, 
            private Editorial : EditorialesService,
            private sucursalservice: SucursalesService
            ) {}

arrgeneros: Genero[] = [];
arreditoriales: Editorial[] = [];
arrsucursales: Sucursal[] = [];
ngOnInit(){
  this.getGeneros();
  this.getEditoriales();
  this.getSucursales();
}
getGeneros(): void {
  this.Genero.get().subscribe((generos) =>{
    this.arrgeneros = generos;
  });
}
getEditoriales(): void {
  this.Editorial.get().subscribe((editoriales) =>{
    this.arreditoriales = editoriales;
  })
}
getSucursales(): void {
  this.sucursalservice.get().subscribe((sucursales) =>{
    this.arrsucursales = sucursales;
  })
}

  sucursal: string = '';
  genero: string = '';
  editorial: string = '';
  nombre: string = '';
  fecha: string = '';
  precio: number = 0;
  cantidad: number = 0;
  
  onSubmit() {
    this.postdata();
  }
  postdata(): void {
    const libro ={
      sucursal: this.sucursal,
      genero: this.genero,
      editorial: this.editorial,
      nombre: this.nombre,
      fecha: this.fecha,
      precio: this.precio,  
      cantidad: this.cantidad,
      estado: true
    }
    this.inventarioService.post(libro).subscribe(
      {
        next: (response) => {
          alert('Editorial guardada con éxito');
          this.onReset();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al guardar la editorial:', error);
          alert('Ocurrió un error al guardar la editorial');
        }
      }    );
  }
  onCancel() {
    this.onReset();
  }
  onReset() {
    this.nombre = '';
    this.fecha = '';
    this.cantidad = 0;
    this.precio = 0;
    this.genero = '';
  }
}
