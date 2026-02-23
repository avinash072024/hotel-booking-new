import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      text: 'The best vacation ever! The staff was incredible and the room was beyond my expectations.',
      author: 'Sarah Johnson',
      avatar: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      text: 'A truly luxurious experience. The dark mode website helped me book at night comfortably!',
      author: 'Michael Chen',
      avatar: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_user_personalization&w=740&q=80'
    },
    {
      id: 3,
      text: 'Breathtaking views and seamless service. The booking process was so smooth, I was relaxed before I even arrived.',
      author: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      text: 'As a business traveler, I appreciate the high-speed internet and the quiet workspace provided in the suite.',
      author: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 5,
      text: 'The dining experience was Michelin-star quality. Every meal was a masterpiece of local flavors.',
      author: 'Elena Petrova',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'
    }
  ];
}
