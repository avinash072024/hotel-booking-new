import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email = signal<string>('');
  isLoading = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);

  onSubmit() {
    if (!this.email()) return;

    this.isLoading.set(true);
    // Simulate API call to send recovery email
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSubmitted.set(true);
    }, 2000);
  }

  resetForm() {
    this.isSubmitted.set(false);
    this.email.set('');
  }
}
