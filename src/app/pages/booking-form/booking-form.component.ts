import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent {
  currentStep = 1;

  // Initial Room Data
  roomDetails = {
    name: 'Oceanic Executive Suite',
    type: 'Penthouse Level',
    pricePerNight: 450, // This must be a number
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000'
  };

  guests = {
    adults: 2,
    children: 0
  };

  taxRate = 0.12; 

  // Function to handle the clicks
  updateGuest(type: 'adults' | 'children', increment: boolean) {
    if (increment) {
      this.guests[type]++;
    } else {
      const min = type === 'adults' ? 1 : 0;
      if (this.guests[type] > min) {
        this.guests[type]--;
      }
    }
    // Change detection will automatically trigger the getters below
  }

  // GETTER: This recalculates EVERY time a guest count changes
  get subtotal(): number {
    // Optional: Add extra charge per person here if needed
    // Example: (Base Price) + (Extra Adults * 50)
    const extraAdultsCharge = (this.guests.adults > 2) ? (this.guests.adults - 2) * 50 : 0;
    return Number(this.roomDetails.pricePerNight) + extraAdultsCharge;
  }

  get totalTax(): number {
    return this.subtotal * this.taxRate;
  }

  get finalTotal(): number {
    return this.subtotal + this.totalTax;
  }

  next() { this.currentStep = 2; }
  back() { this.currentStep = 1; }
}