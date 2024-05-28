import { Component, OnInit } from '@angular/core';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { Inventario } from '../../shared/models/inventario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'] // Corrección aquí: 'styleUrls' en lugar de 'styleUrl'
})
export class InventarioComponent { // Implementar OnInit
  arrInventarios: Inventario[] = [];

  constructor(private inventarioService: InvenatrioService) {} // Nombre corregido

  // ngOnInit(): void {
  //   this.getInventario();
  // }

  // getInventario(): void {
  //   this.inventarioService.getTablas()
  //     .subscribe((inventarios: Inventario[]) => {
  //       this.arrInventarios = inventarios;
  //       console.log(inventarios);
  //     }); 
  // }
}  