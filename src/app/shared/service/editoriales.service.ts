  import { Injectable } from '@angular/core';
  import { HttpClient,HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Editorial } from '../models/editorial';
  import { LiberiaApiService } from './liberia-api.service';
  import { API_ROUTES } from '../../../environments/api_routes';

  @Injectable({
    providedIn: 'root'
  })

  export class EditorialesService implements  LiberiaApiService<Editorial> {
    
    base = API_ROUTES.baseurl
    constructor(private http: HttpClient) { }

    get(): Observable<Editorial[]> {
      return this.http.get<Editorial[]>(`${this.base}${API_ROUTES.editoriales.get}`);
    }

    update(id: number, Editorial:Editorial): Observable<Editorial> {
      return this.http.put<Editorial>(`${this.base}${API_ROUTES.editoriales.update}${id}`,Editorial);
    }

    post(editorial: any): Observable<any> {    
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post<Editorial>(`${this.base}${API_ROUTES.editoriales.post}`, editorial, {headers});
      alert('yes')
    }
    delete(id: number): Observable<Editorial> {
      return this.http.delete<Editorial>(`${this.base}${API_ROUTES.editoriales.delete}${id}`);
    }
  }
