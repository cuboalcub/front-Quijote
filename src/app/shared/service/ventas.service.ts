import { Injectable } from '@angular/core';
import { LiberiaApiService } from './liberia-api.service';
import { HttpClient } from '@angular/common/http';
import { Ventas } from '../models/ventas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VentasService  implements LiberiaApiService<Ventas>{
  constructor(private http: HttpClient) { 
  }
    getTablas(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>('../assets/invetario.json')
  }

  updateTablasById(id: number): Observable<Ventas> {
    return this.http.get<Ventas>(`../assets/invetario.json/${id}`)
  }

  deleteTablasById(id: number): Observable<Ventas> {
    return this.http.get<Ventas>(`../assets/invetario.json/${id}`)
  }

  crearObjeto(): Ventas {
    return new Ventas();
  }

}
