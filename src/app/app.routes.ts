import { Routes } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CreacionPrestamosComponent } from './creacion-prestamos/creacion-prestamos.component';
export const routes: Routes = [
    {path:"inventario", component:InventarioComponent},
    {path: 'prestamos', component:PrestamosComponent },
    {path: 'ventas', component:VentasComponent },
    {path: 'creacionPrestamos', component:CreacionPrestamosComponent}];

