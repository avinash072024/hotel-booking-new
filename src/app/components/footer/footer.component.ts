import { Component, inject } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  toastService = inject(ToastService);
  currentYear = new Date().getFullYear();
  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;
  appName = Constants.APP_NAME_STR1 + Constants.APP_NAME_STR2;

  subscribe(email: string) {
    if (email && email.includes('@')) {
      this.toastService.showSuccess(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
    } else {
      this.toastService.showError('Please enter a valid email address.');
    }
  }
}
