import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/cliente';
import { LiberiaApiService } from './liberia-api.service'; 
@Injectable({
  providedIn: 'root'
})
export class ClientesService implements LiberiaApiService<Clientes> {

  constructor(private http : HttpClient ) { }

  getTablas(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>('../assets/clientes.json');
  }

  updateTablasById(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`../assets/clientes.json/${id}`);
  }

  crearObjeto(): Clientes {
    return new Clientes();
  }

  deleteTablasById(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`../assets/clientes.json/${id}`);
  }

  
}
