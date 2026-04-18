import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // Define the signals
  private selectedRoomSignal = signal<any>(null);
  private wishlistSignal = signal<any[]>(this.loadWishlist());

  // Expose them as read-only signals for components
  selectedRoom = this.selectedRoomSignal.asReadonly();
  wishlist = this.wishlistSignal.asReadonly();

  // Method to update the room
  setSelectedRoom(room: any) {
    this.selectedRoomSignal.set(room);
  }

  // Wishlist Methods
  toggleWishlist(room: any) {
    const current = this.wishlistSignal();
    const index = current.findIndex(r => r.id === room.id);
    
    let updated;
    if (index > -1) {
      updated = current.filter(r => r.id !== room.id);
    } else {
      updated = [...current, room];
    }
    
    this.wishlistSignal.set(updated);
    this.saveWishlist(updated);
  }

  isInWishlist(roomId: number): boolean {
    return this.wishlistSignal().some(r => r.id === roomId);
  }

  private saveWishlist(list: any[]) {
    localStorage.setItem('hotel_wishlist', JSON.stringify(list));
  }

  private loadWishlist(): any[] {
    const saved = localStorage.getItem('hotel_wishlist');
    return saved ? JSON.parse(saved) : [];
  }
}
