import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/cliente';
import { LiberiaApiService } from './liberia-api.service'; 
import { HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Clientes>(`${this.base}${API_ROUTES.clientes.update}${id}`,cliente);
  }

  post(cliente: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.base}${API_ROUTES.clientes.post}`,cliente,{headers});
  }

  delete(id: number): Observable<Clientes> {
    return this.http.delete<Clientes>(`${this.base}${API_ROUTES.clientes.delete}${id}`);
  }

  
}
