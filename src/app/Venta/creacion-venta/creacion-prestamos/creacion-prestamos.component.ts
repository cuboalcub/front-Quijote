import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../../shared/models/inventario';
import { InvenatrioService } from '../../../shared/service/invenatrio.service';
import { ClientesService } from '../../../shared/service/clientes.service';
import { DetalleventaService } from '../../../shared/service/detalleventa.service';
import { Carrito } from '../../../shared/models/carrito';

@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-prestamos.component.html',
  styleUrls: ['./creacion-prestamos.component.css']
})
export class CreacionPrestamosComponent {
  constructor(private inventarioService: InvenatrioService, private clientesService: ClientesService, private detalleventaService: DetalleventaService) {}
  inventario: any[] = [];
  clientes: any[] = [];
  carrito: Carrito[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  cantidad: number = 1;
  maxLibros: number = 3;

  inventarioFiltrado: any[] = [...this.inventario]; // Declarar inventarioFiltrado
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda actual


  seleccionarFilaInventario(index: number, objeto: any) {
    console.log('Fila inventario seleccionada:', index + 1);
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaInventario = index;
    }
  }

  seleccionarFilaCarrito(index: number) {
    console.log('Fila carrito seleccionada:', index);
    if (this.filaSeleccionadaCarrito === index) {
      this.filaSeleccionadaCarrito = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaCarrito = index;
    }
  }

  agregarAlCarrito() {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventario[this.filaSeleccionadaInventario];
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
  
      // Disminuir la cantidad de existencias del libro en el inventario
      libroSeleccionado.existencias -= this.cantidad;
    }
  }
  

  eliminarDelCarrito() {
    if (this.filaSeleccionadaCarrito !== null) {
      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.filaSeleccionadaCarrito = null;
    }
  }

  cantidadTotalEnCarrito(): number {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  }
  filtrarInventario(busqueda: string) {
    this.terminoBusqueda = busqueda; // Almacena el término de búsqueda actual
    console.log('Buscando:', busqueda); // Agrega un log para depuración
    this.inventarioFiltrado = this.inventario.filter(libro =>
      libro.nombre_libro.toLowerCase().includes(busqueda.toLowerCase())
    );
    console.log('Resultado filtrado:', this.inventarioFiltrado); // Agrega un log para depuración
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filtrarInventario(inputElement.value);
  }

  // Datos de ejemplo para la lista de clientes
  

  // Función para actualizar las opciones de la lista desplegable
  actualizarListaDesplegable(input: HTMLInputElement): void {
    const listaClientes: HTMLSelectElement = document.getElementById("listaClientes") as HTMLSelectElement;
    listaClientes.innerHTML = ""; // Limpiar la lista desplegable

    const filtro: string = input.value.toLowerCase();
    const opcionesFiltradas: string[] = this.clientes.filter(cliente => cliente.toLowerCase().includes(filtro));

    opcionesFiltradas.forEach(cliente => {
      const opcion: HTMLOptionElement = document.createElement("option");
      opcion.value = cliente;
      opcion.textContent = cliente;
      listaClientes.appendChild(opcion);
    });
  }

  // Evento para detectar cambios en el campo de entrada y actualizar la lista desplegable
  onInputChange(event: Event): void {
    const inputNombreCliente: HTMLInputElement = event.target as HTMLInputElement;
    this.actualizarListaDesplegable(inputNombreCliente);
  }

  getInvetario() {
    this.inventarioService.get().subscribe(
      (inventario) => (this.inventario = inventario)
    )
  }

  getClientes() {
    this.clientesService.get().subscribe(
      (clientes) => (this.clientes = clientes)
    )
  }

  // Inicializar la lista desplegable
  ngOnInit(): void {
    const inputNombreCliente: HTMLInputElement = document.getElementById("nombreCliente") as HTMLInputElement;
    inputNombreCliente.addEventListener("input", (event) => {
      this.onInputChange(event);
    });
    this.actualizarListaDesplegable(inputNombreCliente);
    this.getInvetario();
    this.getClientes();
  }
  
}


