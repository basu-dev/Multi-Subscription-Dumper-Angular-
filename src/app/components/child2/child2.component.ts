import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;
  sub4!: Subscription;

  ngOnInit() {
    this.sub1 = interval(1000).subscribe(data => {
      console.log('%cChild Component 2', 'font-weight: bold;color:red', data);
    });

    this.sub2 = interval(1000).subscribe(data => {
      console.log('%cChild Component 2', 'font-weight: bold;color:blue', data);
    });

    this.sub3 = interval(1000).subscribe(data => {
      console.log('%cChild Component 2', 'font-weight: bold', data);
    });
  }

  subscribe() {
    this.sub4 = interval(1000).subscribe(data => console.log(data));
  }

  unsubscribe() {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
