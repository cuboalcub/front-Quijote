import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editoriales.component.html',
  styleUrl: './editoriales.component.css'
})
export class EditorialesComponent {

}
