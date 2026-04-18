import { Component, effect, HostListener, inject, OnInit, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-modern-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './modern-header.component.html',
  styleUrl: './modern-header.component.scss',
})
export class ModernHeaderComponent implements OnInit {
  currentTheme = signal<string>(localStorage.getItem('theme') || 'dark');
  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false); // Track mobile menu state
  router = inject(Router);

  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;

  sessionService = inject(SessionService);
  authService = inject(AuthService);

  userDetails = this.sessionService.currentUser;

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

  ngOnInit(): void {
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

  signOut() {
    this.sessionService.clearSession();
    this.handleNavLinkClick();
    this.router.navigate(['/home']);
  }
}
