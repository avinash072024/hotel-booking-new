import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-support',
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  // Signal to track the active category
  activeTab = signal<string>('general');

  faqCategories = [
    { id: 'general', label: 'General', icon: 'bi-info-circle' },
    { id: 'booking', label: 'Booking', icon: 'bi-calendar-check' },
    { id: 'amenities', label: 'Amenities', icon: 'bi-stars' },
    { id: 'policy', label: 'Policies', icon: 'bi-shield-lock' }
  ];

  faqs = [
    { cat: 'general', q: 'What are the check-in and check-out times?', a: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in is subject to availability.' },
    { cat: 'policy', q: 'What is your pet policy?', a: 'We are pet-friendly! We allow pets up to 25lbs for a flat fee of $50 per stay.' },
    { cat: 'booking', q: 'Can I cancel my reservation for free?', a: 'Free cancellation is available up to 48 hours before your arrival date for standard bookings.' },
    { cat: 'amenities', q: 'Is there high-speed Wi-Fi available?', a: 'Yes, ultra-fast 1Gbps Wi-Fi is complimentary for all guests throughout the property.' }
  ];

  setTab(id: string) {
    this.activeTab.set(id);
  }
}
