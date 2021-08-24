import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { subscription } from 'src/app/subscription.decorator';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  @subscription()
  sub!: Subscription;

  ngOnInit() {
    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold;color:red', data);

    });

    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold;color:blue', data);
    });

    this.sub = interval(1000).subscribe(data => {
      console.log('%cChild Component 1', 'font-weight: bold', data);
    });
  }

  subscribe() {
    this.sub = interval(1000).subscribe(data => console.log(data));
  }

  unsubscribe() {
    this.sub.unsubscribe();
  }

}
