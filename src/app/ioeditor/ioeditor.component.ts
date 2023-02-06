import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IoboardService } from '../ioboard.service';

import { User } from '../user';

@Component({
  selector: 'app-ioeditor',
  templateUrl: './ioeditor.component.html',
  styleUrls: ['./ioeditor.component.scss']
})
export class IoeditorComponent {

  constructor(private _router: Router, private ioboardservice: IoboardService, private activatedRoute: ActivatedRoute) { }
  
  model: any;
  username = '';

  groups = [] as any;
  statuses = [] as any;
  hours = [] as any;

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') as string;
    this.ioboardservice
      .getUser(this.username)
      .subscribe(data => {  this.model = data;
    });
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

  updateGroup(e: any) {
    console.log(e.target.value);
  }

  updateUser() {
    this.ioboardservice
      .updateUser(this.model)
        .subscribe();
    this._router.navigateByUrl('/ioboard')
  }

  deleteUser() {
    this.ioboardservice
      .deleteUser(this.username)
        .subscribe();
    this._router.navigateByUrl('/ioboard')
  }
}
