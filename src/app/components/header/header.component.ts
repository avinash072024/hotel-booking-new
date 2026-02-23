import { Component, effect, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  // Initialize with value from localStorage or default to 'light'
  currentTheme = signal<string>(localStorage.getItem('theme') || 'light');

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/offers', label: 'Offers' },
    { path: '/support', label: 'Support' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  constructor() {
    // Automatically apply the theme whenever the signal changes
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  toggleTheme() {
    this.currentTheme.update(theme => theme === 'light' ? 'dark' : 'light');
  }
}
