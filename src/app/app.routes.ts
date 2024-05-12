import { Routes } from '@angular/router';
import { PrestamosComponent } from './Prestamo/prestamos/prestamos.component';
import { CreacionPrestamosComponent } from './Prestamo/creacion-prestamos/creacion-prestamos.component';
import { VentasComponent } from './Venta/ventas/ventas.component';
import { InventarioComponent } from './Invetarios/inventario/inventario.component';
import { EmpleadosComponent } from './empleados/empleados.component';

export const routes: Routes = [
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent},
    {path: 'inventario', component:InventarioComponent},
    {path: 'ventas', component:VentasComponent},
    {path: 'empleados', component:EmpleadosComponent}];

