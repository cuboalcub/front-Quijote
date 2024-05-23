import { Injectable } from '@angular/core';
import { Inventario } from '../../shared/models/inventario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiberiaApiService } from './liberia-api.service';


@Injectable({
  providedIn: 'root'
})
export class InvenatrioService implements LiberiaApiService<Inventario> {

  constructor(private http: HttpClient) { 
  }
    getTablas(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>('../assets/invetario.json')
  }

  updateTablasById(id: number): Observable<Inventario> {
    return this.http.get<Inventario>(`../assets/invetario.json/${id}`)
  }

  crearObjeto(): Inventario {
    return new Inventario();
  }

  deleteTablasById(id: number): Observable<Inventario> {
    return this.http.get<Inventario>(`../assets/invetario.json/${id}`)
  }
}
