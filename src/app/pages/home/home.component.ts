import { Component, inject, signal } from '@angular/core';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { RouterLink, Router } from '@angular/router';
import { DestinationsComponent } from '../../components/destinations/destinations.component';
import { OffersComponent } from '../../components/offers/offers.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [TestimonialsComponent, RouterLink, DestinationsComponent, OffersComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router = inject(Router);

  destination = signal('Where are you going?');
  checkInDate = signal('');
  guests = signal('2 Adults, 1 Child');

  onSearch() {
    this.router.navigate(['/rooms'], {
      queryParams: {
        destination: this.destination() !== 'Where are you going?' ? this.destination() : '',
        date: this.checkInDate(),
        guests: this.guests()
      }
    });
  }

  featuredRooms = [
    {
      id: 1,
      name: 'Ocean View Suite',
      price: 299,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      description: 'Experience the sound of waves and panoramic horizons right from your private balcony.'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      price: 199,
      capacity: '3 Guests',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      description: 'Cozy cabin vibes with modern luxury amenities, nestled in the heart of the pines.'
    },
    {
      id: 3,
      name: 'Presidential Penthouse',
      price: 850,
      capacity: '4 Guests',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      description: 'The pinnacle of luxury featuring a private infinity pool and 24/7 personal butler service.'
    }
  ];
}
