import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';

@Injectable({
  providedIn: 'root'
})
export class DetalleprestamoService {
base = API_ROUTES.baseurl
  constructor( private http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.base + API_ROUTES.detallePrestamos.get);
  }

  put(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.base + API_ROUTES.detallePrestamos.update, data, { headers });}

  post(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.base + API_ROUTES.detallePrestamos.post, data, { headers });} 

  delete(id: number): Observable<any> { 
    return this.http.delete<any>(this.base + API_ROUTES.detallePrestamos.delete + '/' + id); }

}
