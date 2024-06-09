import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';
import { LiberiaApiService } from './liberia-api.service';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';

@Injectable({
  providedIn: 'root'
})
export class GenerosService implements  LiberiaApiService<Genero> {
  base = API_ROUTES.baseurl;
  constructor(private http: HttpClient) { }
 get(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`${this.base}${API_ROUTES.generos.get}`);
}

update(id: number, genero:Genero): Observable<Genero> {
    return this.http.put<Genero>(`${this.base}${API_ROUTES.generos.update}${id}`,genero); 
}

post(genero:any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.base}${API_ROUTES.generos.post}`, genero, {headers}); 
}

delete(id: number): Observable<Genero> {
    return this.http.delete<Genero>(`${this.base}${API_ROUTES.generos.delete}/${id}`);
}
}
