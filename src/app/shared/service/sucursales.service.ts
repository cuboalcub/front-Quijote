import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';
import { LiberiaApiService } from './liberia-api.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService implements LiberiaApiService<Sucursal>{
  constructor(private http: HttpClient) { }

  getTablas(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>('../assets/sucursales.json');  
  }

  deleteTablasById(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`../assets/sucursales.json/${id}`);  
  }

  updateTablasById(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`../assets/sucursales.json/${id}`);
  }

  crearObjeto(): Sucursal {
    return new Sucursal();
  }

  deleteObjetoById(id: number): Sucursal {
    return new Sucursal();
  }
  
}
