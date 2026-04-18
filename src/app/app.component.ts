import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewHeaderComponent } from './components/new-header/new-header.component';
import { ModernHeaderComponent } from './components/modern-header/modern-header.component';
import { DisableRightClickDirective } from './directives/disable-right-click.directive';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { ToasterComponent } from './components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModernHeaderComponent, FooterComponent, DisableRightClickDirective, ScrollTopComponent, ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hotel-booking';

  router = inject(Router);

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.ctrlKey && event.shiftKey && event.key === 'i') || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      event.preventDefault();
    }

    if ((event.ctrlKey && event.shiftKey && event.key === 'u') || (event.ctrlKey && event.shiftKey && event.key === 'U')) {
      event.preventDefault();
    }

    if ((event.ctrlKey && event.shiftKey && event.key === 'p') || (event.ctrlKey && event.shiftKey && event.key === 'P')) {
      event.preventDefault();
    }

    if ((event.ctrlKey && event.shiftKey && event.key === 'c') || (event.ctrlKey && event.shiftKey && event.key === 'C')) {
      event.preventDefault();
    }

    if (event.key === 'F12') {
      event.preventDefault();
    }
  }

  constructor() {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
