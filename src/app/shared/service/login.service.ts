import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { API_ROUTES } from '../../../environments/api_routes';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  base = API_ROUTES.baseurl
  login(usuario: string, contrasena: string): any {
  const header = new HttpHeaders({ 'Content-Type': 'application/json',})
  this.http.post<string>(`${this.base}${API_ROUTES.login.login}`, {usuario, contrasena}, {headers: header})
  }
}
