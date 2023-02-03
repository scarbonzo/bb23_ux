import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IoboardService } from '../ioboard.service';

import { User } from '../user';

@Component({
  selector: 'app-ioeditor',
  templateUrl: './ioeditor.component.html',
  styleUrls: ['./ioeditor.component.scss']
})
export class IoeditorComponent {
  _username = 'jborg';
  _firstName = 'James';
  _group = 'Core';
  _monday = 'WFH';
  _tuesday = 'WFH';
  _wednesday = 'Office';
  _thursday = 'WFH';
  _friday = 'WFH';
  _enabled = 1;

  model = new User(
    this._username,
    this._firstName,
    this._group,
    this._monday,
    this._tuesday,
    this._wednesday,
    this._thursday,
    this._friday,
    this._enabled
    );

  groups: any = [ 'Core', 'Web', 'Multi']
  statuses: any = [ 'Office', 'WFH', 'Out', 'Holiday' ]

  constructor(private _router: Router, private ioboardservice: IoboardService) { }

  updateGroup(e: any) {
    console.log(e.target.value);
  }

  createUser() {
    this.ioboardservice
      .createUser(this.model)
        .subscribe();
    this._router.navigateByUrl('/ioboard')
  }

  update() {

  }
}
