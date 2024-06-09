import { Injectable } from '@angular/core';
import { API_ROUTES } from '../../../environments/api_routes';
import { LiberiaApiService } from './liberia-api.service';
import { Empleado } from '../models/empleados';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService implements LiberiaApiService<Empleado> {
  base = API_ROUTES.baseurl
  constructor(private http: HttpClient) { }

  get(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.base}${API_ROUTES.empleados.get}`);
  }

  update( empleado: Empleado): Observable<Empleado> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Empleado>(`${this.base}${API_ROUTES.empleados.update}`,empleado , {headers});
  }

  post(empleado:any): Observable <any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.base}${API_ROUTES.empleados.post}`,empleado, {headers});
  }

  delete(id: number): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.base}${API_ROUTES.empleados.delete}/${id}`);
  }
}
