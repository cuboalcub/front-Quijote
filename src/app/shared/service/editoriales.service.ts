import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial';
import { LiberiaApiService } from './liberia-api.service';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService implements  LiberiaApiService<Editorial> {

  constructor(private http: HttpClient) { }

  getTablas(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>('../assets/editoriales.json');
  }

  updateTablasById(id: number): Observable<Editorial> {
    return this.http.get<Editorial>(`../assets/editoriales.json/${id}`);
  }

  crearObjeto(): Editorial {
    return new Editorial();
  }

  deleteTablasById(id: number): Observable<Editorial> {
    return this.http.get<Editorial>(`../assets/editoriales.json/${id}`);
  }
}
