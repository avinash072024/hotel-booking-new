import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  appName: string = Constants.APP_NAME;
  appNameForEmail: string = Constants.APP_NAME_STR1+Constants.APP_NAME_STR2;
}
