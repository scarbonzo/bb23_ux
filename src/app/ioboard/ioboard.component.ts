import { Component } from '@angular/core';
import { IoboardService } from '../ioboard.service';

@Component({
  selector: 'app-ioboard',
  templateUrl: './ioboard.component.html',
  styleUrls: ['./ioboard.component.scss']
})
export class IoboardComponent {
  coreusers = [] as any;
  webusers = [] as any;
  multiusers = [] as any;

  dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
  );

  constructor(private ioboardservice: IoboardService) { }

  ngOnInit(): void {
    this.ioboardservice
      .getGroup("Core")
        .subscribe(data => {  this.coreusers = data;
    });

    this.ioboardservice
      .getGroup("Web")
        .subscribe(data => {  this.webusers = data;
    });

    this.ioboardservice
      .getGroup("Multi")
        .subscribe(data => {  this.multiusers = data;
    });
  }
}

