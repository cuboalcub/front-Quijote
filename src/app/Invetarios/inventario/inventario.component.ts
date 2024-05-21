import { Component, OnInit } from '@angular/core';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { Inventario } from '../../shared/models/inventario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'] // Corrección aquí: 'styleUrls' en lugar de 'styleUrl'
})
export class InventarioComponent { // Implementar OnInit
  arrInventarios: Inventario[] = [];

  constructor(private inventarioService: InvenatrioService) {} // Nombre corregido

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(): void {
    this.inventarioService.getInventarios()
      .subscribe((inventarios: Inventario[]) => {
        this.arrInventarios = inventarios;
        console.log(inventarios);
      }); 
  }
}  