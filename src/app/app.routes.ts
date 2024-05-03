import { Routes } from '@angular/router';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { InventarioComponent } from './inventario/inventario.component';
export const routes: Routes = [
    {path:"inventario", component:InventarioComponent},
    {path: 'prestamos', component:PrestamosComponent }];
