import { inject, Injectable } from '@angular/core';
import { Constants } from '../models/constants';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sessionService = inject(SessionService);

  isAuthenticated(): boolean {
    const userDetails = this.sessionService.getSession(Constants.userDetails);
    return !!userDetails;
  }
}
