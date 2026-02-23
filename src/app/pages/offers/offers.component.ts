import { Component, signal } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  // Signal to handle "Copied" state for promo codes
  copiedCode = signal<string | null>(null);
  offers = Constants.MOCK_OFFERS_ARR;

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
    this.copiedCode.set(code);
    setTimeout(() => this.copiedCode.set(null), 2000);
  }
}
