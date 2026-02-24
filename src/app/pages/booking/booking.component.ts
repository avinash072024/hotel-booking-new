import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  currentStep = 1;

  // Booking Data Model
  bookingDetails = {
    checkIn: '',
    checkOut: '',
    roomName: '',
    roomType: '',
    roomPrice: 0,
    guests: 1,
    fullName: '',
    email: ''
  };

  // rooms = [
  //   { id: 'deluxe', name: 'Deluxe Vista', price: 250, img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' },
  //   { id: 'royal', name: 'Royal Penthouse', price: 600, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80' }
  // ];

  rooms = Constants.MOCK_ROOMS_ARR;

  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  selectRoom(room: any) {
    debugger;
    this.bookingDetails.roomName = room.name;
    this.bookingDetails.roomType = room.roomType;
    this.bookingDetails.roomPrice = room.price;
  }

  get totalAmount() {
    return this.bookingDetails.roomPrice * 3; // Example for 3 nights
  }
}
