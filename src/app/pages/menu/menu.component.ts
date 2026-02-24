import { Component, computed, signal } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  // State Signals
  selectedTime = signal<string>('Breakfast');
  selectedCuisine = signal<string>('Indian');
  dietaryFilter = signal<string>('All');

  appName: string = Constants.APP_NAME;

  menuItems: any = Constants.MOCK_MENU_ARR;

  filteredMenu = computed(() => {
    return this.menuItems.filter((item: any) => {
      const matchTime = item.time === this.selectedTime();
      const matchCuisine = item.cuisine === this.selectedCuisine();
      const matchDiet = this.dietaryFilter() === 'All' || item.type === this.dietaryFilter();
      return matchTime && matchCuisine && matchDiet;
    });
  });
}
