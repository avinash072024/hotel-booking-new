import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  imports: [CommonModule, FormsModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {
  searchQuery = signal<string>('');

  categories = [
    { icon: 'bi-calendar-check', title: 'Bookings', count: 12, color: 'primary' },
    { icon: 'bi-credit-card', title: 'Payments', count: 8, color: 'success' },
    { icon: 'bi-shield-lock', title: 'Account Security', count: 5, color: 'info' },
    { icon: 'bi-person-walking', title: 'Travel Policies', count: 10, color: 'warning' }
  ];

  faqs = [
    {
      q: 'How do I cancel my reservation?',
      a: 'You can cancel your reservation via the "My Bookings" dashboard. Depending on the room policy, a full refund is usually available 48 hours prior to check-in.',
      open: false
    },
    {
      q: 'Are there hidden service fees?',
      a: 'No, all taxes and service charges are displayed transparently during the final step of the booking process.',
      open: false
    },
    {
      q: 'Can I request an early check-in?',
      a: 'Early check-in is subject to availability. You can leave a note in the "Special Requests" section during booking or message the hotel directly.',
      open: false
    }
  ];

  // Filtered FAQs based on search
  filteredFaqs = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.faqs.filter(f => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query));
  });

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
