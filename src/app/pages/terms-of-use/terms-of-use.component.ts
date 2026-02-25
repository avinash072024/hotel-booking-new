import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  imports: [DatePipe, RouterLink],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent {
  revisionDate = new Date();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
