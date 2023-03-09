import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InoutboardService } from '../inoutboard.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private _router: Router, private inoutboardservice: InoutboardService, private activatedRoute: ActivatedRoute) { }

  model: any;
  username = '';

  groups = [] as any;
  statuses = [] as any;
  
  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') as string;
    this.inoutboardservice
      .getUser(this.username)
      .subscribe(data => {  this.model = data;
    });
    this.inoutboardservice
      .getGroups()
        .subscribe(data => {  this.groups = data;
    });
    this.inoutboardservice
      .getStatuses()
        .subscribe(data => {  this.statuses = data;
    });
  }

  updateUser() {
    this.inoutboardservice
      .updateUser(this.model)
        .subscribe();
    this._router.navigateByUrl('/board')
  }
  cancel() {
    this._router.navigateByUrl('/board')
  }
}
