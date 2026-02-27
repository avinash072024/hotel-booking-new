import { Injectable } from '@angular/core';
import { Constants } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  clearSession() {
    localStorage.removeItem(Constants.userDetails);
  }
}
