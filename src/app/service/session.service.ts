import { Injectable, signal } from '@angular/core';
import { Constants } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  currentUser = signal<any>(this.getInitialUser());

  constructor() { }

  private getInitialUser(): any {
    const value = localStorage.getItem(Constants.userDetails);
    return value ? JSON.parse(value) : null;
  }

  setSession(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    if (key === Constants.userDetails) {
      this.currentUser.set(value);
    }
  }

  getSession(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  clearSession() {
    localStorage.removeItem(Constants.userDetails);
    this.currentUser.set(null);
  }
}
