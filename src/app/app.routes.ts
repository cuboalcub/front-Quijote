import { Routes } from '@angular/router';
import { VentasComponent } from './Venta/ventas/ventas.component';
import { PrestamosComponent } from './Prestamo/prestamos/prestamos.component';
import { InventarioComponent } from './Invetarios/inventario/inventario.component';
import { CreacionPrestamosComponent } from './Prestamo/creacion-prestamos/creacion-prestamos.component';
export const routes: Routes = [
    {path:"inventario", component:InventarioComponent},
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'ventas', component:VentasComponent },
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent}];

