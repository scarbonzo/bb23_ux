import { Component } from '@angular/core';
import { InoutboardService } from '../inoutboard.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.scss']
})
export class LiveboardComponent {
  constructor(private inoutboardservice: InoutboardService) { }

  private updateSubscription!: Subscription;

  mgmtusers = [] as any;
  coreusers = [] as any;
  hdusers = [] as any;
  webusers = [] as any;
  multiusers = [] as any;

  ngOnInit() {
    this.GetUsers();
    this.updateSubscription = interval(60000).subscribe(
      (val) => { this.GetUsers()
    });
  }

  dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
  );

  GetUsers() {
    this.inoutboardservice
      .getGroupMembers("Management")
        .subscribe(data => {  this.mgmtusers = data;
    });

    this.inoutboardservice
      .getGroupMembers("Core")
        .subscribe(data => {  this.coreusers = data;
    });

    this.inoutboardservice
      .getGroupMembers("Helpdesk")
        .subscribe(data => {  this.hdusers = data;
    });

    this.inoutboardservice
      .getGroupMembers("Web")
        .subscribe(data => {  this.webusers = data;
    });

    this.inoutboardservice
      .getGroupMembers("Multi")
        .subscribe(data => {  this.multiusers = data;
    });
  }
}
