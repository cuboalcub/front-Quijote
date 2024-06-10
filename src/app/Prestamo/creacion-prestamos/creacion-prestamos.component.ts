import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { Carrito } from '../../shared/models/carrito';

@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './creacion-prestamos.component.html',
  styleUrl: './creacion-prestamos.component.css'
})
export class CreacionPrestamosComponent {
//datos de ejemplo para las tablas
  inventario: Inventario[] = [
    {id:1,sucursal:"Sucursal 1",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 1",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:2,sucursal:"Sucursal 2",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 2",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:3,sucursal:"Sucursal 3",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 3",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:4,sucursal:"Sucursal 4",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 4",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:5,sucursal:"Sucursal 5",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 5",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:6,sucursal:"Sucursal 6",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 6",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:7,sucursal:"Sucursal 7",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 7",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true},
    {id:8,sucursal:"Sucursal 8",genero:"Ficcion",editorial:"Editorial 1",nombre_libro:"Libro 8",Fecha_public:"2022-01-01", precio:10,existencias:5,estado:true}
  ];

  carrito: Carrito[] = [];

  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  subtotal: number = 0;

  inventarioFiltrado: Inventario[] = [...this.inventario]; // Declarar inventarioFiltrado
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda actual


  seleccionarFilaInventario(index: number, objeto: any) {
    console.log(objeto);
    console.log('Fila inventario seleccionada:', index+1);
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaInventario = index;
    }
  }

  seleccionarFilaCarrito(index: number, ) {
    console.log('Fila carrito seleccionada:', index);
    if (this.filaSeleccionadaCarrito === index) {
      this.filaSeleccionadaCarrito = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaCarrito = index;
    }
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
  clientes: string[] = [
    "Cliente 1",
    "Cliente 2",
    "Cliente 3",
    "Otro Cliente",
    "Cliente de Prueba"
  ];

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

  // Inicializar la lista desplegable
  ngOnInit(): void {
    const inputNombreCliente: HTMLInputElement = document.getElementById("nombreCliente") as HTMLInputElement;
    inputNombreCliente.addEventListener("input", (event) => {
      this.onInputChange(event);
    });
    this.actualizarListaDesplegable(inputNombreCliente);
  }
}


