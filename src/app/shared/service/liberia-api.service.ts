import { Observable } from 'rxjs';

export abstract class LiberiaApiService<T> {
  abstract get(): Observable<T[]>;
  abstract update( T:T): Observable<T>;
  abstract post(T:T): Observable<T>;
  abstract delete(id: number): Observable<T>;
}
