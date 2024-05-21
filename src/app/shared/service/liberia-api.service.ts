// src/app/services/crud.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export abstract class LiberiaApiService<T> {

  



  // protected apiUrl: string;
  // public http: HttpClient 

  // constructor(protected http: HttpClient, apiUrl: string) {
  //   this.http = http;
  //   this.apiUrl = apiUrl;
  // }

  // protected handleError(error: any) {
  //   console.error('Error:', error);
  //   return throwError(error.message || 'Error del servidor');
  // }

  // getAll(): Observable<T[]> {
  //   return this.http.get<T[]>(this.apiUrl).pipe(catchError(this.handleError));
  // }

  // getOne(id: number): Observable<T> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<T>(url).pipe(catchError(this.handleError));
  // }

  // create(item: T): Observable<T> {
  //   return this.http.post<T>(this.apiUrl, item, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }).pipe(catchError(this.handleError));
  // }

  // update(item: T): Observable<T> {
  //   const url = `${this.apiUrl}/${(item as any).id}`;
  //   return this.http.put<T>(url, item, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }).pipe(catchError(this.handleError));
  // }

  // delete(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url).pipe(catchError(this.handleError));
  // }
}
