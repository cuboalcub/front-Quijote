import { Injectable } from '@angular/core';
import { Inventario } from '../../shared/models/inventario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiberiaApiService } from './liberia-api.service';
import { API_ROUTES } from '../../../environments/api_routes';

@Injectable({
  providedIn: 'root'
})
export class InvenatrioService implements LiberiaApiService<Inventario> {

  constructor(private http: HttpClient) { }

  get(): Observable<Inventario[]> { 
    return this.http.get<Inventario[]>(`${API_ROUTES.inventario.get}`);
  }

  update(id: number, inventario:Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(`${API_ROUTES.inventario.update}/${id}`, inventario);
  }

  post(inventario: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(`${API_ROUTES.inventario.post}`, inventario);
  }

  delete(id: number): Observable<Inventario> {
    return this.http.delete<Inventario>(`${API_ROUTES.inventario.delete}/${id}`);
  }
}
