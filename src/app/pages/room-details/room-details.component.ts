import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-room-details',
  imports: [RouterLink],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {
  roomId!: number;
  selectedRoom = signal<any>([]);
  // selectedRoom!: any;

  featuredRooms = Constants.MOCK_ROOMS_ARR;

  constructor(private route: ActivatedRoute,
    // public roomService: RoomService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.selectedRoom.set(
        this.featuredRooms.find((room: any) => room.id === id) ?? null
      );
    });
  }
}
