import { Injectable } from '@angular/core';
import { Prestamo } from '../models/prestamos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiberiaApiService } from './liberia-api.service';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService implements LiberiaApiService<Prestamo> {

  constructor(private http: HttpClient) { }

  getTablas(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>('http://localhost:3000/prestamos');
  }

  updateTablasById(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`http://localhost:3000/prestamos/${id}`);
  }

  crearObjeto(): Prestamo {
    return new Prestamo();
  }

   deleteTablasById(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`http://localhost:3000/prestamos/${id}`);
  }
}
