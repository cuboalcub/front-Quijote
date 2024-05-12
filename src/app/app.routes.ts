import { Routes } from '@angular/router';
import { PrestamosComponent } from './Prestamo/prestamos/prestamos.component';
import { CreacionPrestamosComponent } from './Prestamo/creacion-prestamos/creacion-prestamos.component';
import { VentasComponent } from './Venta/ventas/ventas.component';
import { InventarioComponent } from './Invetarios/inventario/inventario.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { CreacionEditorialComponent } from './creacion-editorial/creacion-editorial.component';
import { AltaLibrosComponent } from './alta-libros/alta-libros.component';
export const routes: Routes = [
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent},
    {path: 'inventario', component:InventarioComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'registroClientes', component:RegistroClientesComponent},
    {path: 'creacionEditorial', component:CreacionEditorialComponent},
    {path: 'altaLibros', component:AltaLibrosComponent}];


