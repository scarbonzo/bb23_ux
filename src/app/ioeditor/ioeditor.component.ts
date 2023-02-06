import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ngbCarouselTransitionOut} from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
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

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') as string;
    this.ioboardservice
      .getUser(this.username)
      .subscribe(data => {  this.model = data;
      });
  }

  groups: any = [ 'Core', 'HD', 'Web', 'Multi']
  statuses: any = [ 'Office', 'WFH', 'Out', 'Offsite', 'Holiday' ]
  hours: any = [ '8:00-4:00', '8:30-4:30', '9:00-5:00', '9:30-5:30' ]

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
