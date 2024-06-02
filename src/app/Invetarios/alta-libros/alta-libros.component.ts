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
ngOninit(){
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

  nombre: string = '';
  fecha: string = '';
  cantidad: number = 0;
  precio: number = 0;
  genero: string = '';
  sucursal: string = '';
  selectedEditorial: any;
  selectedSucursal: any;
  onSubmit() {
    
  }
  postdata(): void {
    const libro ={
      nombre: this.nombre,
      fecha: this.fecha,
      cantidad: this.cantidad,
      precio: this.precio,
      genero: this.genero,
      editorial: this.selectedEditorial,
      sucursal: this.selectedSucursal
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
