import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-room-details',
  imports: [RouterLink],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {
  roomId!: number;
  // selectedRoom = signal<any>([]);
  selectedRoom!: any;

  featuredRooms = [
    {
      id: 1,
      name: 'Ocean View Suite',
      price: 299,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      description: 'Experience the sound of waves and panoramic horizons right from your private balcony.'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      price: 199,
      capacity: '3 Guests',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      description: 'Cozy cabin vibes with modern luxury amenities, nestled in the heart of the pines.'
    },
    {
      id: 3,
      name: 'Presidential Penthouse',
      price: 850,
      capacity: '4 Guests',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      description: 'The pinnacle of luxury featuring a private infinity pool and 24/7 personal butler service.'
    },
    {
      id: 4,
      name: 'Azure Garden Villa',
      price: 450,
      capacity: '5 Guests',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      description: 'A secluded sanctuary surrounded by exotic flora with a private terrace garden.'
    },
    {
      id: 5,
      name: 'Royal Heritage Room',
      price: 320,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80',
      description: 'Classic elegance meets modern technology in our heritage-inspired master suites.'
    },
    {
      id: 6,
      name: 'Skyline Executive',
      price: 275,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      description: 'Floor-to-ceiling windows offering breathtaking views of the city skyline.'
    },
    {
      id: 7,
      name: 'Desert Oasis Suite',
      price: 380,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
      description: 'Minimalist sand-toned interiors designed for maximum relaxation and peace.'
    },
    {
      id: 8,
      name: 'Lakeside Family Lodge',
      price: 550,
      capacity: '6 Guests',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'The perfect family getaway with spacious living areas and direct lake access.'
    },
    {
      id: 9,
      name: 'Golden Sands Studio',
      price: 150,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=800&q=80',
      description: 'Chic, compact, and steps away from the private beach—ideal for solo travelers.'
    },
    {
      id: 10,
      name: 'Zen Wellness Suite',
      price: 420,
      capacity: '2 Guests',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
      description: 'Includes an in-room sauna and aromatherapy system for a complete spa experience.'
    }
  ];

  constructor(private route: ActivatedRoute,
    public roomService: RoomService
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.roomId = params.get('id');
    //   this.selectedRoom = this.featuredRooms.find(room => room.id === +this.roomId);
    // });
    // debugger;
    // this.roomId = Number(this.route.snapshot.paramMap.get('id')!);
    // console.log('Room ID:', this.roomId);
    // this.selectedRoom = this.featuredRooms.filter(r => r.id === this.roomId);
    // // this.selectedRoom.set(selectedRoom);
    // console.log('this.selectedRoom:', this.selectedRoom)
  }
}
