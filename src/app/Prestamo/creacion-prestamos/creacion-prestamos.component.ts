import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { ClientesService } from '../../shared/service/clientes.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { Carrito } from '../../shared/models/carrito';
import { DetalleprestamoService } from '../../shared/service/detalleprestamo.service';
import { Router } from '@angular/router';
import { PrestamosService } from '../../shared/service/prestamos.service';

@Component({
  selector: 'app-creacion-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-prestamos.component.html',
  styleUrls: ['./creacion-prestamos.component.css']
})
export class CreacionPrestamosComponent implements OnInit {
  inventario: any[] = [];
  clientes: any[] = [];
  carrito: Carrito[] = [];
  filaSeleccionadaInventario: number | null = null;
  filaSeleccionadaCarrito: number | null = null;
  cantidad: number = 1;
  maxLibros: number = 3;
  DP: any[] = [];
  inventarioFiltrado: any[] = [];
  terminoBusqueda: string = '';
  cliente: number = 0;
  fechaLimite: string = '';
  clientesFiltrados: any[] = [];

  constructor(
    private inventarioService: InvenatrioService,
    private clientesService: ClientesService,
    private detalleprestamo: DetalleprestamoService,
    private prestamosService: PrestamosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInventario();
    this.getClientes();
  }

  getInventario(): void {
    this.inventarioService.get().subscribe(
      (inventario:any[]) => {
        this.inventario = inventario;
        this.inventarioFiltrado = [...this.inventario];
      }
      
    );
  }

  getClientes(): void {
    this.clientesService.get().subscribe(
      (clientes) => {
        this.clientes = clientes;
        this.clientesFiltrados = [...this.clientes];
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

      this.detalleprestamo.get().subscribe((detalleprestamo: any[]) => {
        this.DP = detalleprestamo;
      });

      const libro = {
        id_libro: libroSeleccionado.id,
        idPrestamo: this.DP.length + 1,
        cantidad: this.cantidad,
        fecha: this.fechaLimite,
        estado: true,
      };

      this.detalleprestamo.post(libro).subscribe(
        (response) => {
          console.log('Libro registrado exitosamente:', response);
        },
        (error) => console.error('Error al registrar el libro:', error)
      );
    }
  }

  eliminarDelCarrito(): void {
    if (this.filaSeleccionadaCarrito !== null) {
      const itemEliminado = this.carrito[this.filaSeleccionadaCarrito];
      const libroEnInventario = this.inventario.find(libro => libro.id === itemEliminado.id);

      if (libroEnInventario) {
        libroEnInventario.existencias += itemEliminado.cantidad;
      }

      this.detalleprestamo.delete(this.filaSeleccionadaCarrito + 1).subscribe(
        (response) => {
          console.log('Libro eliminado exitosamente:', response);
        },
        (error) => console.error('Error al eliminar el libro:', error)
      );

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
      libro.nombre && libro.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filtrarInventario(inputElement.value);
  }

  actualizarListaDesplegable(): void {
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.terminoBusqueda = inputElement.value;
    this.actualizarListaDesplegable();
  }

  confirmarPrestamo(): void {
    let libro: number = 0;
    this.carrito.forEach(item => {
      libro += item.cantidad;
    });

    const librosPrestados = {
      id_cliente: this.cliente,
      cantidad: libro,
      estado: true
    };

    this.detalleprestamo.post(librosPrestados).subscribe(
      (response) => {
        console.log('Prestamo registrado exitosamente:', response);
      },
      (error) => console.error('Error al registrar el prestamo:', error)
    );
  }

  cancelarPrestamo(): void {
    let idPrestamo = this.DP.length + 1;
    this.prestamosService.cancelar(idPrestamo).subscribe(
      (response) => {
        console.log('Prestamo cancelado exitosamente:', response);
      },
      (error) => console.error('Error al cancelar el prestamo:', error)
    );
    this.router.navigate(['/prestamos']);
  }
}
