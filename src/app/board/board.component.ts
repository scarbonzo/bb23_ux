import { Component, OnInit } from '@angular/core';
import { InoutboardService } from '../inoutboard.service';
import { Observable, Subscription, interval } from 'rxjs';
import { User2 } from '../user2';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private inoutboardservice: InoutboardService) { }

  private updateSubscription!: Subscription;

  mgmtusers = [] as any;
  coreusers = [] as any;
  hdusers = [] as any;
  webusers = [] as any;
  multiusers = [] as any;

  showManagement = true;
  showCore = true;
  showHelpdesk = true;
  showWeb = true;
  showMulti = true;

  showStatus = true;
  showHours = true;
  showNotes = true;
  showWeekNotes = true;

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

  NameRowHeight(member: User2) {
    if(this.showWeekNotes && member.weekNotes != '') {
      return 2;
    }
    else {
      return 1;
    }
  }
}
