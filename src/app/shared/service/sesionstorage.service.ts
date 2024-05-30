import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionstorageService {

  constructor() { }
  get(key: string): any {
    return sessionStorage.getItem(key);
  }
  set(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
