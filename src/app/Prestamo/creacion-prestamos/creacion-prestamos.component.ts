import { Component } from '@angular/core';

@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './creacion-prestamos.component.html',
  styleUrl: './creacion-prestamos.component.css'
})
export class CreacionPrestamosComponent {

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


