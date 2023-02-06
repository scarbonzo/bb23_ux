import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IoboardService } from '../ioboard.service';
import { User } from '../user';

@Component({
  selector: 'app-iocreate',
  templateUrl: './iocreate.component.html',
  styleUrls: ['./iocreate.component.scss']
})
export class IocreateComponent implements OnInit {

  constructor(private _router: Router, private ioboardservice: IoboardService) { }

  groups = [] as any;
  statuses = [] as any;
  hours = [] as any;

  ngOnInit(): void {
    this.ioboardservice
      .getGroups()
        .subscribe(data => {  this.groups = data;
    });
    this.ioboardservice
      .getStatuses()
        .subscribe(data => {  this.statuses = data;
    });
    this.ioboardservice
      .getHours()
        .subscribe(data => {  this.hours = data;
    });
  }

  _username = '';
  _firstName = '';
  _group = '';
  _mondayStatus = 'Office';
  _tuesdayStatus = 'Office';
  _wednesdayStatus = 'Office';
  _thursdayStatus = 'Office';
  _fridayStatus = 'Office';
  _mondayHours = '9:00-5:00';
  _tuesdayHours = '9:00-5:00';
  _wednesdayHours = '9:00-5:00';
  _thursdayHours = '9:00-5:00';
  _fridayHours = '9:00-5:00';
  _enabled = 1;

  model = new User(
    this._username,
    this._firstName,
    this._group,
    this._mondayStatus,
    this._tuesdayStatus,
    this._wednesdayStatus,
    this._thursdayStatus,
    this._fridayStatus,
    this._mondayHours,
    this._tuesdayHours,
    this._wednesdayHours,
    this._thursdayHours,
    this._fridayHours,
    this._enabled
    );

  createUser() {
    this.ioboardservice
      .createUser(this.model)
        .subscribe();
    this._router.navigateByUrl('/ioboard')
  }

  
}
