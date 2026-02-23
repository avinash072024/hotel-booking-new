import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destinations',
  imports: [NgClass, RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent implements OnInit {
  destinations: any = Constants.MOCK_DESTINATIONS_ARR;

  ngOnInit(): void {
    this.destinations = this.destinations.slice(0, 5)
  }
}