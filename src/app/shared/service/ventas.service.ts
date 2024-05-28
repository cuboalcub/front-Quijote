import { Injectable } from '@angular/core';
import { LiberiaApiService } from './liberia-api.service';
import { HttpClient } from '@angular/common/http';
import { Ventas } from '../models/ventas';
import { Observable } from 'rxjs';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class VentasService  implements LiberiaApiService<Ventas>{
  constructor(private http: HttpClient) { 
  }
base = API_ROUTES.baseurl
  get(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(`${API_ROUTES.venta.get}`);
  }

  update(id: number, ventas:Ventas): Observable<Ventas> {
    return this.http.put<Ventas>(`${this.base}${API_ROUTES.venta.update}/${id}`, ventas);
  }

  post(ventas:Ventas): Observable<Ventas> {
    return this.http.post<Ventas>(`${this.base}${API_ROUTES.venta.post}`, ventas);
  }

  delete(id: number): Observable<Ventas> {
    return this.http.delete<Ventas>(`${this.base}${API_ROUTES.venta.delete}/${id}`);
  }



}
