import { Component } from '@angular/core';
import {HeaderComponent} from './header/app.HeaderComponent';
import { NavComponent } from './nav/app.Navcomponent';
import {ContentAreaComponent} from './content-area/content-area.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
@Component({
  selector: 'app-root',

  templateUrl: `./main.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
