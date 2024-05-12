import { Routes } from '@angular/router';
import { VentasComponent } from './Venta/ventas/ventas.component';
import { PrestamosComponent } from './Prestamo/prestamos/prestamos.component';
import { InventarioComponent } from './Invetarios/inventario/inventario.component';
import { RegistroClientesComponent } from './Clientes/registro-clientes/registro-clientes.component';
import { CreacionEditorialComponent } from './Editorial/creacion-editorial/creacion-editorial.component';
import { AltaLibrosComponent } from './Libros/alta-libros/alta-libros.component';
import { RegistroEmpleadosComponent } from './Empleado/registro-empleados/registro-empleados.component';
import { CreacionPrestamosComponent } from './Prestamo/creacion-prestamos/creacion-prestamos.component';
import { CreacionSucursalComponent } from './Sucursal/creacion-sucursal/creacion-sucursal.component';
import { ClienteComponent } from './Clientes/cliente/cliente.component';
import { EditorialesComponent } from './Editorial/editoriales/editoriales.component';
export const routes: Routes = [
    {path:"inventario", component:InventarioComponent},
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'ventas', component:VentasComponent },
    {path: 'registroempleados', component:RegistroEmpleadosComponent},
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent},
    {path: 'inventario', component:InventarioComponent},
    {path: 'creacionSucursal', component: CreacionSucursalComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'registroClientes', component:RegistroClientesComponent},
    {path: 'editoriales', component:EditorialesComponent},
    {path: 'creacionEditorial', component:CreacionEditorialComponent},
    {path: 'altaLibros', component:AltaLibrosComponent},
    {path: 'cliente', component:ClienteComponent},];


