import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InoutboardService } from '../inoutboard.service';
import { User2 } from '../user2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private _router: Router, private ioboardservice: InoutboardService) { }

  groups = [] as any;
  statuses = [] as any;

  _username = '';
  _firstName = '';
  _group = '';
  _mondayStatus = 'WFH';
  _tuesdayStatus = 'WFH';
  _wednesdayStatus = 'Office';
  _thursdayStatus = 'WFH';
  _fridayStatus = 'WFH';
  _mondayStart = '9:00 AM';
  _tuesdayStart = '9:00 AM';
  _wednesdayStart = '9:00 AM';
  _thursdayStart = '9:00 AM';
  _fridayStart = '9:00 AM';
  _mondayEnd = '5:00 PM';
  _tuesdayEnd = '5:00 PM';
  _wednesdayEnd = '5:00 PM';
  _thursdayEnd = '5:00 PM';
  _fridayEnd = '5:00 PM';
  _mondayNotes = '';
  _tuesdayNotes = '';
  _wednesdayNotes = '';
  _thursdayNotes = '';
  _fridayNotes = '';
  _weekNotes = '';
  _enabled = 1;

  model = new User2(
    this._username,
    this._firstName,
    this._group,
    this._mondayStatus,
    this._tuesdayStatus,
    this._wednesdayStatus,
    this._thursdayStatus,
    this._fridayStatus,
    this._mondayStart,
    this._tuesdayStart,
    this._wednesdayStart,
    this._thursdayStart,
    this._fridayStart,
    this._mondayEnd,
    this._tuesdayEnd,
    this._wednesdayEnd,
    this._thursdayEnd,
    this._fridayEnd,
    this._mondayNotes,
    this._tuesdayNotes,
    this._wednesdayNotes,
    this._thursdayNotes,
    this._fridayNotes,
    this._weekNotes,
    this._enabled
    );

  ngOnInit(): void {
    this.ioboardservice
      .getGroups()
        .subscribe(data => {  this.groups = data;
    });
    this.ioboardservice
      .getStatuses()
        .subscribe(data => {  this.statuses = data;
    });
  }

  createUser() {
    this.ioboardservice
      .createUser(this.model)
        .subscribe();
    this._router.navigateByUrl('/board')
  }
  cancel() {
    this._router.navigateByUrl('/board')
  }
}
