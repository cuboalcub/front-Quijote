import { Injectable } from '@angular/core';
import { LiberiaApiService } from './liberia-api.service';
import { HttpClient } from '@angular/common/http';
import { Ventas } from '../models/ventas';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class VentasService  implements LiberiaApiService<Ventas>{
  constructor(private http: HttpClient) { 
  }
base = API_ROUTES.baseurl
  get(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(`${API_ROUTES.ventas.get}`);
  }

  update( ventas:Ventas): Observable<Ventas> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Ventas>(`${this.base}${API_ROUTES.ventas.update}`, ventas, {headers});
  }

  post(ventas:any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.base}${API_ROUTES.ventas.post}`, ventas, {headers});
  }

  delete(id: number): Observable<Ventas> {
    return this.http.delete<Ventas>(`${this.base}${API_ROUTES.ventas.delete}/${id}`);
  }

  cancelar(id: number): Observable<any> { 
    return this.http.delete<any>(this.base + API_ROUTES.ventas.cancelar + '/' + id);
  }

}
