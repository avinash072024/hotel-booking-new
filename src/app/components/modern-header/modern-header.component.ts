import { Component, effect, HostListener, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-modern-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './modern-header.component.html',
  styleUrl: './modern-header.component.scss'
})
export class ModernHeaderComponent {
  currentTheme = signal<string>(localStorage.getItem('theme') || 'light');
  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false); // Track mobile menu state

  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/offers', label: 'Offers' },
    { path: '/support', label: 'Support' },
  ];

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 992) {
      this.isMenuOpen.set(false);
    }
  }

  toggleTheme() {
    this.currentTheme.update(t => t === 'light' ? 'dark' : 'light');
  }

  // Helper to close menu programmatically
  handleNavLinkClick() {
    if (this.isMenuOpen()) {
      // Find the toggler button and click it to trigger Bootstrap's collapse
      const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
      if (toggler) {
        toggler.click();
      }
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
