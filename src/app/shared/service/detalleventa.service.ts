import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {

  constructor(private http: HttpClient) { }
  private baseUrl = API_ROUTES.baseurl;

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + API_ROUTES.detalleVentas.get);
  }

  put(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.baseUrl + API_ROUTES.detalleVentas.update, data, { headers });}

  post(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl + API_ROUTES.detalleVentas.post, data, { headers });}

  delete(id: number): Observable<any> { 
    return this.http.delete<any>(this.baseUrl + API_ROUTES.detalleVentas.delete + '/' + id); }

  cancelar(id: number): Observable<any> { 
    return this.http.delete<any>(this.baseUrl + API_ROUTES.detalleVentas.cancelar + '/' + id); }
    

}
