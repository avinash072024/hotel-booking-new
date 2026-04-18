import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  currentStep: number = 1;

  // Mock data representing what you'd get from the Room Details page
  roomInfo = {
    name: 'Oceanic Executive Suite',
    type: 'Penthouse Level',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000',
    basePrice: 450, // Price for 1-2 adults
    extraAdultRate: 50,
    childRate: 30
  };

  guests = {
    adults: 2,
    children: 0
  };

  bookingData = {
    fullName: '',
    email: '',
    phone: '',
    requests: ''
  };

  taxRate = 0.12; // 12%

  ngOnInit(): void {
    // Logic to pull room data from router state would go here
  }

  // --- CALCULATION ENGINE ---

  get subtotal(): number {
    // Logic: Base price + extra for adults over 2 + price per child
    const extraAdults = this.guests.adults > 2 ? (this.guests.adults - 2) * this.roomInfo.extraAdultRate : 0;
    const childrenCost = this.guests.children * this.roomInfo.childRate;
    return Number(this.roomInfo.basePrice) + extraAdults + childrenCost;
  }

  get taxAmount(): number {
    return this.subtotal * this.taxRate;
  }

  get grandTotal(): number {
    return this.subtotal + this.taxAmount;
  }

  // --- ACTIONS ---

  updateGuests(type: 'adults' | 'children', increment: boolean) {
    if (increment) {
      this.guests[type]++;
    } else {
      const min = type === 'adults' ? 1 : 0;
      if (this.guests[type] > min) {
        this.guests[type]--;
      }
    }
  }

  bookingConfirmed: boolean = false;
  bookingId: string = '';

  next() {
    if (this.currentStep === 2) {
      this.confirmBooking();
    } else {
      this.currentStep = 2;
    }
  }

  back() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  confirmBooking() {
    // Generate a mock booking ID
    this.bookingId = 'LB' + Math.random().toString(36).substr(2, 9).toUpperCase();
    this.bookingConfirmed = true;
    this.currentStep = 3;
    console.log('Booking Confirmed:', this.bookingId);
  }
}