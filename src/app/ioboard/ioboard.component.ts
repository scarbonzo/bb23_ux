import { Component } from '@angular/core';
import { IoboardService } from '../ioboard.service';

@Component({
  selector: 'app-ioboard',
  templateUrl: './ioboard.component.html',
  styleUrls: ['./ioboard.component.scss']
})
export class IoboardComponent {
  mgmtusers = [] as any;
  coreusers = [] as any;
  hdusers = [] as any;
  webusers = [] as any;
  multiusers = [] as any;

  dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
  );

  constructor(private ioboardservice: IoboardService) { }

  ngOnInit(): void {
    this.ioboardservice
      .getGroupMembers("Management")
        .subscribe(data => {  this.mgmtusers = data;
    });
    this.ioboardservice
      .getGroupMembers("Core")
        .subscribe(data => {  this.coreusers = data;
    });

    this.ioboardservice
      .getGroupMembers("Helpdesk")
        .subscribe(data => {  this.hdusers = data;
    });

    this.ioboardservice
      .getGroupMembers("Web")
        .subscribe(data => {  this.webusers = data;
    });

    this.ioboardservice
      .getGroupMembers("Multi")
        .subscribe(data => {  this.multiusers = data;
    });
  }
}

