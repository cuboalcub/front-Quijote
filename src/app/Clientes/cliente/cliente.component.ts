import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Clientes } from '../../shared/models/cliente';
import { ClientesService } from '../../shared/service/clientes.service';
import { LocalstorageService } from '../../shared/service/localstorage.service';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
constructor(private clientesService: ClientesService,
            private localstorageService: LocalstorageService
) {}
arrclientes: Clientes[] = [];
key = 'idclientes';
ngOnInit(): void {
  this.getClientes();
}

getClientes(): void {
  this.clientesService.get().subscribe((clientes: Clientes[]) => {
    this.arrclientes = clientes;
    console.log(clientes);
  });
}
getId(id: number): void {
  this.localstorageService.guardarDatos(this.key,id);
}
}
