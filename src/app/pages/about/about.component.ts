import { Component } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  appName: string = Constants.APP_NAME
}
