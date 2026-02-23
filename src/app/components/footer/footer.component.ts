import { Component } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  appName1 = Constants.APP_NAME_STR1;
  appName2 = Constants.APP_NAME_STR2;
  appName = Constants.APP_NAME_STR1 + Constants.APP_NAME_STR2;
}
