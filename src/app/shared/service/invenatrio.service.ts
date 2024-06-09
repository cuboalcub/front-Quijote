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
baseUrl = API_ROUTES.baseurl
  get(): Observable<Inventario[]> { 
    return this.http.get<Inventario[]>(`${this.baseUrl}${API_ROUTES.inventarios.get}`);
  }

  update( inventario:Inventario): Observable<Inventario> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Inventario>(`${this.baseUrl}${API_ROUTES.inventarios.update}`, inventario, {headers});
  }

  post(inventario: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.baseUrl}${API_ROUTES.inventarios.post}`, inventario, {headers});
  }

  delete(id: number): Observable<Inventario> {
    return this.http.delete<Inventario>(`${this.baseUrl}${API_ROUTES.inventarios.delete}/${id}`);
  }
}
