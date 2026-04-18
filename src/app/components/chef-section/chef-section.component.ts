import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chef-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chef-section.component.html',
  styleUrl: './chef-section.component.scss'
})
export class ChefSectionComponent {
}
