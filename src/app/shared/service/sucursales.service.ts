import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';
import { LiberiaApiService } from './liberia-api.service';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class SucursalesService implements LiberiaApiService<Sucursal>{
  constructor(private http: HttpClient) { }
base = API_ROUTES.baseurl

  get(): Observable<Sucursal[]> { 
    return this.http.get<Sucursal[]>(`${this.base}${API_ROUTES.sucursales.get}`);
  }

  update(id: number, sucursal:Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.base}${API_ROUTES.sucursales.update}/${id}`, sucursal);
  }

  post(sucursal:Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(`${this.base}${API_ROUTES.sucursales.post}`, sucursal);
  }

  delete(id: number): Observable<Sucursal> {
    return this.http.delete<Sucursal>(`${this.base}${API_ROUTES.sucursales.delete}/${id}`);
  }
  
}
