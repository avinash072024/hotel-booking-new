import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  showPassword = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  registerData = {
    fullName: '',
    email: '',
    password: '',
    agreeTerms: false
  };

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onRegister() {
    if (!this.registerData.agreeTerms) return;

    this.isLoading.set(true);
    // Simulate API registration
    setTimeout(() => {
      console.log('User Registered:', this.registerData);
      this.isLoading.set(false);
    }, 2000);
  }
}
