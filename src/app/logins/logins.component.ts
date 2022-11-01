import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {
  events = [] as any;
  search = '';
  logons = true;
  logoffs = true;
  locks = true;
  unlocks = true;
  start = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()-7);
  end = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 59);
  take = 25;
  skip = 0;

  constructor(private loginsService: LoginsService) { }

  ngOnInit(): void {
  }

  update() {
    this.loginsService
      .getBasicEvents(
        this.start, this.end,
        this.search,
        this.logons, this.logoffs, this.locks, this.unlocks,
        this.take, this.skip)
        .subscribe(data => {  this.events = data;
    });
  }

  parseStartDate(dateString: string): Date {
    console.log(dateString);
    if (dateString) {
        return new Date(dateString + 'T00:00:00') ;
    }
    return new Date();
  }

  parseEndDate(dateString: string): Date {
    console.log(dateString);
    if (dateString) {
        return new Date(dateString + 'T23:59:59');
    }
    return new Date();
  }
}
