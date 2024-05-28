import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VentasService } from '../../shared/service/ventas.service';
import { Ventas } from '../../shared/models/ventas';
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
constructor(private ventasService: VentasService) {}
arrventas: Ventas[] = [];


// ngOnInit(): void {
// this.getVentas();
// }
// getVentas(): void {
//   this.ventasService.getTablas().subscribe((ventas: Ventas[]) => {
//     this.arrventas = ventas;
//     console.log(ventas);
//   })
// }

}
