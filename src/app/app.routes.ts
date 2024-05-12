import { Routes } from '@angular/router';
import { VentasComponent } from './Venta/ventas/ventas.component';
import { PrestamosComponent } from './Prestamo/prestamos/prestamos.component';
import { InventarioComponent } from './Invetarios/inventario/inventario.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { CreacionEditorialComponent } from './creacion-editorial/creacion-editorial.component';
import { AltaLibrosComponent } from './alta-libros/alta-libros.component';
import { RegistroEmpleadosComponent } from './Clientes/registro-empleados/registro-empleados.component';
import { CreacionPrestamosComponent } from './Prestamo/creacion-prestamos/creacion-prestamos.component';
import { CreacionSucursalComponent } from './creacion-sucursal/creacion-sucursal.component';
export const routes: Routes = [
    {path:"inventario", component:InventarioComponent},
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'ventas', component:VentasComponent },
    {path: 'registroempleados', component:RegistroEmpleadosComponent},
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent},
    {path: 'inventario', component:InventarioComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'creacionSucursal', component: CreacionSucursalComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'registroClientes', component:RegistroClientesComponent},
    {path: 'creacionEditorial', component:CreacionEditorialComponent},
    {path: 'altaLibros', component:AltaLibrosComponent}];


