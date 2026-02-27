import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  showPassword = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  ngOnInit(): void {
    
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onLogin() {
    this.isLoading.set(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', this.loginData);
      this.isLoading.set(false);
    }, 2000);
  }
}
