import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Booking {
  id: string;
  roomName: string;
  roomType: string;
  image: string;
  checkIn: Date;
  checkOut: Date;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
}

@Component({
  selector: 'app-my-bookings',
  imports: [NgClass, UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit {

  // bookings: Booking[] = [
  //   {
  //     id: 'RES-7701',
  //     roomName: 'Oceanic Executive Suite',
  //     roomType: 'Penthouse',
  //     image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000',
  //     checkIn: new Date('2026-03-15'),
  //     checkOut: new Date('2026-03-20'),
  //     status: 'confirmed',
  //     totalPrice: 1850
  //   },
  //   {
  //     id: 'RES-4420',
  //     roomName: 'Garden Deluxe',
  //     roomType: 'Twin Bed',
  //     image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000',
  //     checkIn: new Date('2026-05-10'),
  //     checkOut: new Date('2026-05-12'),
  //     status: 'pending',
  //     totalPrice: 420
  //   }
  // ];

  bookings: Booking[] = [
    {
      id: 'RES-7701',
      roomName: 'Oceanic Executive Suite',
      roomType: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000',
      checkIn: new Date('2026-03-15'),
      checkOut: new Date('2026-03-20'),
      status: 'confirmed',
      totalPrice: 1850
    },
    {
      id: 'RES-4420',
      roomName: 'Garden Deluxe',
      roomType: 'Twin Bed',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000',
      checkIn: new Date('2026-05-10'),
      checkOut: new Date('2026-05-12'),
      status: 'pending',
      totalPrice: 420
    },
    {
      id: 'RES-9912',
      roomName: 'Skyline Terrace Room',
      roomType: 'King Luxury',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000',
      checkIn: new Date('2026-01-05'),
      checkOut: new Date('2026-01-08'),
      status: 'completed',
      totalPrice: 960
    },
    {
      id: 'RES-2105',
      roomName: 'Royal Heritage Villa',
      roomType: 'Private Pool Villa',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000',
      checkIn: new Date('2026-07-20'),
      checkOut: new Date('2026-07-25'),
      status: 'cancelled',
      totalPrice: 3200
    }
  ];

  ngOnInit(): void { }

  getStatusClass(status: string) {
    switch (status) {
      case 'confirmed': return 'bg-success-subtle text-success';
      case 'pending': return 'bg-warning-subtle text-warning';
      case 'cancelled': return 'bg-danger-subtle text-danger';
      default: return 'bg-secondary-subtle text-secondary';
    }
  }

  cancelBooking(id: string) {
    if (confirm('Are you sure you want to cancel this reservation?')) {
      this.bookings = this.bookings.map(b =>
        b.id === id ? { ...b, status: 'cancelled' } : b
      );
    }
  }
}