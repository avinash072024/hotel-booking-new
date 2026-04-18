import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  activeTab = signal<string>('personal');
  router = inject(Router);
  sessionService = inject(SessionService);
  roomService = inject(RoomService);

  wishlist = this.roomService.wishlist;

  userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    avatar: 'https://i.pravatar.cc/300',
    memberSince: 'Oct 2024',
    membershipLevel: 'Gold Member',
    luxePoints: 1250
  };

  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.userProfile.avatar = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    console.log('Profile Saved:', this.userProfile);
  }

  removeFromWishlist(room: any) {
    this.roomService.toggleWishlist(room);
  }

  signOut(){
    this.sessionService.clearSession();
    this.router.navigate(['/home']);
  }
}