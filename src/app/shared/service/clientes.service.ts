import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/cliente';
import { LiberiaApiService } from './liberia-api.service'; 
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class ClientesService implements LiberiaApiService<Clientes> {
  base = API_ROUTES.baseurl;
  constructor(private http : HttpClient ) { }

  get(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${this.base}${API_ROUTES.clientes.get}`);
  }

  update(id: number, cliente:Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(`${this.base}${API_ROUTES.clientes.update}${id}`,cliente);
  }

  post(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(`${this.base}${API_ROUTES.clientes.post}`,cliente);
  }

  delete(id: number): Observable<Clientes> {
    return this.http.delete<Clientes>(`${this.base}${API_ROUTES.clientes.delete}${id}`);
  }

  
}
