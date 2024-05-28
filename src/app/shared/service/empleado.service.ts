import { Injectable } from '@angular/core';
import { API_ROUTES } from '../../../environments/api_routes';
import { LiberiaApiService } from './liberia-api.service';
import { Empleado } from '../models/empleados';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService implements LiberiaApiService<Empleado> {
  base = API_ROUTES.baseurl
  constructor(private http: HttpClient) { }

  get(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.base}${API_ROUTES.empleado.get}`);
  }

  update(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.base}${API_ROUTES.empleado.update}/${id}`,empleado);
  }

  post(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.base}${API_ROUTES.empleado.post}`,empleado);
  }

  delete(id: number): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.base}${API_ROUTES.empleado.delete}/${id}`);
  }
}
