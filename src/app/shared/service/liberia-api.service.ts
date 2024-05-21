import { Observable } from 'rxjs';

export abstract class LiberiaApiService<T> {
  abstract getTablas(): Observable<T[]>;
}
