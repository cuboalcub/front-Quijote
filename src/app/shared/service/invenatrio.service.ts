import { Injectable } from '@angular/core';
import { Inventario } from '../../shared/models/inventario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiberiaApiService } from './liberia-api.service';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';

@Injectable({
  providedIn: 'root'
})
export class InvenatrioService implements LiberiaApiService<Inventario> {

  constructor(private http: HttpClient) { }

  get(): Observable<Inventario[]> { 
    return this.http.get<Inventario[]>(`${API_ROUTES.inventarios.get}`);
  }

  update(id: number, inventario:Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(`${API_ROUTES.inventarios.update}/${id}`, inventario);
  }

  post(inventario: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${API_ROUTES.inventarios.post}`, inventario, {headers});
  }

  delete(id: number): Observable<Inventario> {
    return this.http.delete<Inventario>(`${API_ROUTES.inventarios.delete}/${id}`);
  }
}
