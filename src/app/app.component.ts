import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { subscription } from './subscription.decorator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typeracer-video';


}
