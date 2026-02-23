import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-destinations',
  imports: [NgClass],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
  selectedCategory = signal<string>('All');

  destinations: any = Constants.MOCK_DESTINATIONS_ARR;

  // Computed signal to handle real-time filtering
  filteredDestinations = computed(() => {
    if (this.selectedCategory() === 'All') return this.destinations;
    return this.destinations.filter((d: any) => d.category === this.selectedCategory());
  });

  setFilter(cat: string) {
    this.selectedCategory.set(cat);
  }
}
