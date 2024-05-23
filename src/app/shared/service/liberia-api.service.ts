import { Observable } from 'rxjs';

export abstract class LiberiaApiService<T> {
  abstract getTablas(): Observable<T[]>;
  abstract updateTablasById(id: number): Observable<T>;
  abstract crearObjeto(): T;
  abstract deleteTablasById(id: number): Observable<T>;
}
