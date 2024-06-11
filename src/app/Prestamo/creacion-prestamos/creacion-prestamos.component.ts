import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { ClientesService } from '../../shared/service/clientes.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { Carrito } from '../../shared/models/carrito';

@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-prestamos.component.html',
  styleUrls: ['./creacion-prestamos.component.css']
})
export class CreacionPrestamosComponent implements OnInit {
  inventario: any[] = [];
  clientes: string[] = [];
  carrito: Carrito[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  cantidad: number = 1;
  maxLibros: number = 3;
  inventarioFiltrado: any[] = [];
  terminoBusqueda: string = '';

  constructor(
    private inventarioService: InvenatrioService,
    private clientesService: ClientesService,
    private detalleventaService: DetalleventaService
  ) {}

  ngOnInit(): void {
    this.getInventario();
    this.getClientes();
  }

  getInventario(): void {
    this.inventarioService.get().subscribe(
      (inventario) => {
        this.inventario = inventario;
        this.inventarioFiltrado = [...this.inventario];
      },
      (error) => console.error('Error al obtener el inventario:', error)
    );
  }

  getClientes(): void {
    this.clientesService.get().subscribe(
      (clientes) => {
        this.clientes = clientes.map(cliente => cliente.nombre);
      },
      (error) => console.error('Error al obtener los clientes:', error)
    );
  }

  seleccionarFilaInventario(index: number): void {
    this.filaSeleccionadaInventario = this.filaSeleccionadaInventario === index ? null : index;
  }

  seleccionarFilaCarrito(index: number): void {
    this.filaSeleccionadaCarrito = this.filaSeleccionadaCarrito === index ? null : index;
  }

  agregarAlCarrito(): void {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventarioFiltrado[this.filaSeleccionadaInventario];
      const cantidadTotal = this.carrito.reduce((total, item) => total + item.cantidad, 0);

      if (cantidadTotal + this.cantidad > this.maxLibros) {
        alert('No puedes agregar más de 3 libros al carrito.');
        return;
      }

      const itemCarrito = this.carrito.find(item => item.id === libroSeleccionado.id);

      if (itemCarrito) {
        itemCarrito.cantidad += this.cantidad;
      } else {
        this.carrito.push({
          id: libroSeleccionado.id,
          nombre: libroSeleccionado.nombre_libro,
          precio: libroSeleccionado.precio,
          cantidad: this.cantidad
        });
      }

      libroSeleccionado.existencias -= this.cantidad;
      this.inventarioFiltrado = [...this.inventario];
    }
  }

  eliminarDelCarrito(): void {
    if (this.filaSeleccionadaCarrito !== null) {
      const itemEliminado = this.carrito[this.filaSeleccionadaCarrito];
      const libroEnInventario = this.inventario.find(libro => libro.id === itemEliminado.id);

      if (libroEnInventario) {
        libroEnInventario.existencias += itemEliminado.cantidad;
      }

      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.filaSeleccionadaCarrito = null;
    }
  }

  cantidadTotalEnCarrito(): number {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  }

  filtrarInventario(busqueda: string): void {
    this.terminoBusqueda = busqueda;
    this.inventarioFiltrado = this.inventario.filter(libro =>
      libro.nombre_libro.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  actualizarListaDesplegable(input: HTMLInputElement): void {
    const listaClientes: HTMLSelectElement = document.getElementById('listaClientes') as HTMLSelectElement;
    listaClientes.innerHTML = '';

    const filtro: string = input.value.toLowerCase();
    const opcionesFiltradas: string[] = this.clientes.filter(cliente => cliente.toLowerCase().includes(filtro));

    opcionesFiltradas.forEach(cliente => {
      const opcion: HTMLOptionElement = document.createElement('option');
      opcion.value = cliente;
      opcion.textContent = cliente;
      listaClientes.appendChild(opcion);
    });
  }

  onInputChange(event: Event): void {
    const inputNombreCliente: HTMLInputElement = event.target as HTMLInputElement;
    this.actualizarListaDesplegable(inputNombreCliente);
  }
}
