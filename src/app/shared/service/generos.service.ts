import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';
import { LiberiaApiService } from './liberia-api.service';
import { API_ROUTES } from '../../../environments/api_routes';

@Injectable({
  providedIn: 'root'
})
export class GenerosService implements  LiberiaApiService<Genero> {
  base = API_ROUTES.baseurl;
  constructor(private http: HttpClient) { }
 get(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`${this.base}${API_ROUTES.genero.get}`);
}

update(id: number, genero:Genero): Observable<Genero> {
    return this.http.put<Genero>(`${this.base}${API_ROUTES.genero.update}${id}`,genero); 
}

post(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(`${this.base}${API_ROUTES.genero.post}`, genero); 
}

delete(id: number): Observable<Genero> {
    return this.http.delete<Genero>(`${this.base}${API_ROUTES.genero.delete}${id}`);
}
}
