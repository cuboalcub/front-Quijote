import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { Editorial } from '../../shared/models/editorial';
import { SesionstorageService } from '../../shared/service/sesionstorage.service';
@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editoriales.component.html',
  styleUrl: './editoriales.component.css'
})
export class EditorialesComponent {
  constructor(private editorialesService: EditorialesService,
              private sesionstorageService: SesionstorageService
  ){}
arrEditoriales : Editorial[] = [];
id : number = 0;
 ngOnInit(): void {
   this.getEditoriales();
 }
getEditoriales(): void {
  this.editorialesService.get()
    .subscribe(
      (editoriales: Editorial[]) => {
        this.arrEditoriales = editoriales;
      }
    )
}
getId(obj: Editorial): void {
  this.sesionstorageService.set("editorial",obj);  
}


  filaSeleccionada: number | null = null;

  seleccionarFila(index: number, id: number) {
    console.log('Fila seleccionada:', index);
    if (this.filaSeleccionada === index) {
      this.filaSeleccionada = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionada = index;
      this.id = id;
    }
  }

  eliminarFila() {
    if (this.filaSeleccionada !== null) {
      this.editorialesService.delete(this.id).subscribe(
        (response) => {
          alert('Editorial eliminada con exito');
          this.filaSeleccionada = null;
          this.getEditoriales();
        },
        (error) => {
          alert('Error al eliminar la editorial');
          console.log(error);
        }
      );
  }else{
    alert('Fila no seleccionada');
  }
}
}