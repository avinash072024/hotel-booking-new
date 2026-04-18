import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { Constants } from '../../models/constants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  router = inject(Router);
  roomService = inject(RoomService);

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  // Filter States
  searchTerm = signal('');
  selectedType = signal('All');
  maxPrice = signal(1000);
  isLoading = signal(true);
  
  roomTypes = ['All', 'Deluxe Vista', 'Royal Penthouse', 'Presidential Suite', 'Azure Garden', 'Royal Heritage', 'Skyline Suite', 'Desert Oasis', 'Lakeside Lodge', 'Golden Sands', 'Zen Wellness'];

  // All Rooms
  allRooms = Constants.MOCK_ROOMS_ARR;

  // Filtered Rooms
  filteredRooms = computed(() => {
    return this.allRooms.filter((room: any) => {
      const matchesSearch = room.name.toLowerCase().includes(this.searchTerm().toLowerCase());
      const matchesType = this.selectedType() === 'All' || room.roomType === this.selectedType();
      const matchesPrice = room.price <= this.maxPrice();
      return matchesSearch && matchesType && matchesPrice;
    });
  });

  // Selected room for Quick View (Simple Implementation)
  selectedQuickViewRoom = signal<any>(null);

  openQuickView(room: any) {
    this.selectedQuickViewRoom.set(room);
    // In a real app, you'd trigger a Bootstrap modal here
  }

  closeQuickView() {
    this.selectedQuickViewRoom.set(null);
  }

  selectRoom(room: any) {
    this.roomService.setSelectedRoom(room);
    this.router.navigate(['/room-details', room.id]);
  }

  toggleWishlist(event: Event, room: any) {
    event.stopPropagation();
    this.roomService.toggleWishlist(room);
  }

  isInWishlist(roomId: number) {
    return this.roomService.isInWishlist(roomId);
  }
}
