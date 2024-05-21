import { Injectable } from '@angular/core';
import { Inventario } from '../../shared/models/inventario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InvenatrioService  {
  constructor(private http: HttpClient) {}
  url = "../../assets/invetario.json";
  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.url);
  }
  // constructor(protected override http: HttpClient) {
  //   super(http, '../../assets/invetario.json');
  //  }
}
