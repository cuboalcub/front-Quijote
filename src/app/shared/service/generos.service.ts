import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';
import { LiberiaApiService } from './liberia-api.service';
@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  getTablas(): Observable<Genero[]> {
    return this.http.get<Genero[]>('../assets/generos.json');
  }

  updateTablasById(id: number): Observable<Genero> {
    return this.http.get<Genero>(`../assets/generos.json/${id}`);
  }

  crearObjeto(): Genero {
    return new Genero();
  }

  deleteTablasById(id: number): Observable<Genero> {
    return this.http.get<Genero>(`../assets/generos.json/${id}`);
  }
}
