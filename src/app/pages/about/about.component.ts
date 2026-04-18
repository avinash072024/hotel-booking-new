import { Component } from '@angular/core';
import { Constants } from '../../models/constants';
import { ChefSectionComponent } from '../../components/chef-section/chef-section.component';

@Component({
  selector: 'app-about',
  imports: [ChefSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  appName: string = Constants.APP_NAME
}
