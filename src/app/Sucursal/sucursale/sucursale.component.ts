import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sucursale',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sucursale.component.html',
  styleUrl: './sucursale.component.css'
})
export class SucursaleComponent {

}
