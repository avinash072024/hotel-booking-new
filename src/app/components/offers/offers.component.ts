import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent implements OnInit {
  offers = Constants.MOCK_OFFERS_ARR;

  ngOnInit(): void {
    this.offers = this.offers.slice(0, 3)
  }

}
