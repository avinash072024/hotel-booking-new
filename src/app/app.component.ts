import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewHeaderComponent } from './components/new-header/new-header.component';
import { ModernHeaderComponent } from './components/modern-header/modern-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModernHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-booking';

  router = inject(Router);
  showScrollTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTopButton = scrollPosition > 200; // Show button when scrolled 200px
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.ctrlKey && event.shiftKey && event.key === 'i') || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      event.preventDefault();
    }

    if ((event.ctrlKey && event.key === 'u') || (event.ctrlKey && event.key === 'U')) {
      event.preventDefault();
    }

    if ((event.ctrlKey && event.key === 'p') || (event.ctrlKey && event.key === 'P')) {
      event.preventDefault();
    }

    if (event.key === 'F12') {
      event.preventDefault();
    }
  }

  constructor() {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
