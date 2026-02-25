import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  activeTab = signal<string>('personal');

  userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    avatar: 'https://i.pravatar.cc/300',
    memberSince: 'Oct 2024',
    membershipLevel: 'Gold Member'
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
    // Add your snackbar/toast logic here
  }
}