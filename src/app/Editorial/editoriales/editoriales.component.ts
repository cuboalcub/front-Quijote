import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EditorialesService } from '../../shared/service/editoriales.service';
import { Editorial } from '../../shared/models/editorial';
import { LocalstorageService } from '../../shared/service/localstorage.service';

@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editoriales.component.html',
  styleUrl: './editoriales.component.css'
})
export class EditorialesComponent {
  constructor(private editorialesService: EditorialesService,
              private localstorageService: LocalstorageService
  ){}
arr : Editorial[] = []
 ngOnInit(): void {
   this.getEditoriales();
 }
getEditoriales(): void {
  this.editorialesService.get()
    .subscribe(
      (editoriales: Editorial[]) => {
        this.arr = editoriales;
      }
    )
}
getId(id: number): void {
  this.localstorageService.guardarDatos('ideditorial',id);  
}


}
