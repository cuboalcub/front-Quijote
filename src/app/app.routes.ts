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
import { SucursaleComponent } from './Sucursal/sucursale/sucursale.component';
import { GenerosComponent } from './Genero/generos/generos.component';
import { EmpleadosComponent } from './Empleado/empleados/empleados.component';
import { RegistroGeneroComponent } from './Genero/registro-genero/registro-genero.component';
import { ModificarGeneroComponent } from './Genero/modificar-genero/modificar-genero.component';
import { ModificarEmpleadoComponent } from './Empleado/modificar-empleado/modificar-empleado.component';
import { ModificarClienteComponent } from './Clientes/modificar-cliente/modificar-cliente.component';
import { ModificarEditorialComponent } from './Editorial/modificar-editorial/modificar-editorial.component';
import { ModificarSucursalComponent } from './modificar-sucursal/modificar-sucursal.component';

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
    {path: 'cliente', component:ClienteComponent},
    {path: 'sucursales', component:SucursaleComponent},
    {path: 'generos', component:GenerosComponent},
    {path: 'registroGenero', component:RegistroGeneroComponent},
    {path: 'empleados', component:EmpleadosComponent},
    {path: 'modificarGenero', component:ModificarGeneroComponent},
    {path: 'modificarEmpleado', component:ModificarEmpleadoComponent},
    {path: 'empleados', component:EmpleadosComponent},
    {path: 'modificarCliente', component:ModificarClienteComponent},
    {path: 'modificarEditorial', component:ModificarEditorialComponent},
    {path: 'modificarSucursal', component:ModificarSucursalComponent}];


