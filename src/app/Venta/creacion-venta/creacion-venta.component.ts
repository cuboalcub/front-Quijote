import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inventario } from '../../shared/models/inventario';
import { Carrito } from '../../shared/models/carrito';
import { InvenatrioService } from '../../shared/service/invenatrio.service';
import { DetalleventaService } from '../../shared/service/detalleventa.service';
import { VentasService } from '../../shared/service/ventas.service';

@Component({
  selector: 'app-creacion-venta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-venta.component.html',
  styleUrls: ['./creacion-venta.component.css']
})
export class CreacionVentaComponent {
  

  // inventario = [
  //   { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
  //   { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
  //   { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' },
  //   { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
  //   { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
  //   { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' },
  //   { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
  //   { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
  //   { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' },
  //   { id: '1', nombre: 'Libro A', fechaPublicacion: '2020-01-01', idSucursal: '1', idGenero: '1', idEditorial: '1', precio: '100', existencias: '10' },
  //   { id: '2', nombre: 'Libro B', fechaPublicacion: '2019-05-15', idSucursal: '2', idGenero: '2', idEditorial: '2', precio: '150', existencias: '5' },
  //   { id: '3', nombre: 'Libro C', fechaPublicacion: '2018-07-23', idSucursal: '3', idGenero: '3', idEditorial: '3', precio: '200', existencias: '8' }
  // ];

  // carrito = [
  //   { id: '1', nombre: 'Libro A', precio: '100', cantidad: '1' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' },
  //   { id: '2', nombre: 'Libro B', precio: '150', cantidad: '2' }
  // ];


  constructor(private inventarioService: InvenatrioService, private detalleVentaService: DetalleventaService, private ventasService: VentasService) { }

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
  total: number = 0;
  objeto: any;
  cantidad: number = 1;

  inventarioFiltrado: Inventario[] = [...this.inventario]; // Declarar inventarioFiltrado
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda actual

  ngOnInit(): void {
    this.actualizarTotal();
    this.getInventario();
  }
  getInventario(): void {
    this.inventarioService.get().subscribe((inventario: Inventario[]) => {
      this.inventario = inventario;
    }
    );
  }

  seleccionarFilaInventario(index: number, objeto: any) {
    console.log('Fila inventario seleccionada:', index);
    if (this.filaSeleccionadaInventario === index) {
      this.filaSeleccionadaInventario = null; // Deselecciona la fila si se hace clic de nuevo
    } else {
      this.filaSeleccionadaInventario = index;
      this.objeto = objeto;
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

  actualizarTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  agregarDetalleVenta() {
    if (this.filaSeleccionadaInventario !== null) {
      const libroSeleccionado = this.inventario[this.filaSeleccionadaInventario];
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
        const libro = {
          id_libro: libroSeleccionado.id,
          id_prestamo: 1,
          cantidad:this.cantidad,
          fecha: libroSeleccionado.Fecha_public,
          estado: true
        }
        this.detalleVentaService.post(libro).subscribe((response) => {
          alert('Libro agregado al carrito de compras');
        });

      }

      this.actualizarTotal();
    }
  }

  eliminarDelCarrito() {
    if (this.filaSeleccionadaCarrito !== null) {
      console.log('Fila carrito eliminada:', this.filaSeleccionadaCarrito);
      this.carrito.splice(this.filaSeleccionadaCarrito, 1);
      this.detalleVentaService.delete(this.filaSeleccionadaCarrito+1).subscribe((response) => {
        alert('Libro eliminado del carrito de compras');
      },
      (error) => {
        console.error(error);
        alert('Error al eliminar el libro del carrito de compras');
      });
      this.filaSeleccionadaCarrito = null;
      this.actualizarTotal();
    }

  }

  confirmarVenta() {
    // Aquí iría la lógica para confirmar la venta
    console.log('Venta confirmada:', this.carrito);
    this.carrito.forEach(element => {
      this.ventasService.post(element).subscribe((response) => {
        alert('Venta realizada con exito');
      },
    )
    });
    this.carrito = [];
    this.total = 0;
  }

  cancelarVenta() {
    this.carrito = [];
    this.total = 0;
  }
}
