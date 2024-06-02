import { Injectable } from '@angular/core';
import { Prestamo } from '../models/prestamos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiberiaApiService } from './liberia-api.service';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class PrestamosService implements LiberiaApiService<Prestamo> {
base = API_ROUTES.baseurl
  constructor(private http: HttpClient) { }

  get(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(`${this.base}${API_ROUTES.prestamos.get}`);
  }

  update(id: number, prestamo: Prestamo): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.base}${API_ROUTES.prestamos.update}/${id}`, prestamo);
  }

  post(prestamo: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.base}${API_ROUTES.prestamos.post}`, prestamo, {headers});
  }
  delete(id: number): Observable<Prestamo> {
    return this.http.delete<Prestamo>(`${this.base}${API_ROUTES.prestamos.delete}/${id}`);
  } 
}
