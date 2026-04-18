import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { Constants } from '../../models/constants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChefSectionComponent } from '../../components/chef-section/chef-section.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FormsModule, CommonModule, ChefSectionComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  roomService = inject(RoomService);

  ngOnInit() {
    // Read query params
    this.route.queryParams.subscribe(params => {
      if (params['destination']) {
        this.searchTerm.set(params['destination']);
      }
    });

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
      const search = this.searchTerm().toLowerCase();
      const matchesSearch = room.name.toLowerCase().includes(search) || 
                           (room.location && room.location.toLowerCase().includes(search));
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
