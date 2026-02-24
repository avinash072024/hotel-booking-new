import { Component, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  translateX = 0;
  translateY = 0;

  location = inject(Location)

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // Subtle parallax effect based on mouse position
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    this.translateX = x;
    this.translateY = y;
  }
}
