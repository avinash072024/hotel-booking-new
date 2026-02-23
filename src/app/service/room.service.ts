import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // Define the signal here
  private selectedRoomSignal = signal<any>(null);

  // Expose it as a read-only signal for components
  selectedRoom = this.selectedRoomSignal.asReadonly();

  // Method to update the room
  setSelectedRoom(room: any) {
    this.selectedRoomSignal.set(room);
  }
}
