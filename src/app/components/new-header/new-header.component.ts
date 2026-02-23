import { Component, effect, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-new-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './new-header.component.html',
  styleUrl: './new-header.component.scss'
})
export class NewHeaderComponent {
  // Persistence logic from our previous step
  currentTheme = signal<string>(localStorage.getItem('theme') || 'light');
  isScrolled = signal<boolean>(false);

  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/offers', label: 'Offers' },
    { path: '/support', label: 'Support' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  // Detect scroll to change background
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleTheme() {
    this.currentTheme.update(t => t === 'light' ? 'dark' : 'light');
  }
}
