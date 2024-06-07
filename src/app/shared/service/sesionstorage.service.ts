import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionstorageService {

  constructor() { }
  get(key: string): any {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  set(key: string, value: any): void {
    const serializedValue = JSON.stringify(value);
    console.log(serializedValue);
    
    sessionStorage.setItem(key, serializedValue);
  }
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
