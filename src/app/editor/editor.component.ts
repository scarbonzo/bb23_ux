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

  username = '';
  model: any;
  template: any;

  groups = [] as any;
  statuses = [] as any;
  
  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') as string;
    this.inoutboardservice
      .getUser(this.username)
      .subscribe(data => {  this.model = data;
    });
    this.inoutboardservice
      .getUserTemplate(this.username)
      .subscribe(data => {  this.template = data;
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
  updateTemplate() {
    this.inoutboardservice
      .updateTemplate(this.template)
        .subscribe();
  }
    cancelTemplate() {
    this.inoutboardservice
      .getUserTemplate(this.username)
      .subscribe(data => {  this.template = data;
    });
  }
  applyTemplate() {
    this.model.mondayStatus = this.template.mondayStatus;
    this.model.mondayStart = this.template.mondayStart;
    this.model.mondayEnd = this.template.mondayEnd;
    this.model.mondayNotes = this.template.mondayNotes;

    this.model.tuesdayStatus = this.template.tuesdayStatus;
    this.model.tuesdayStart = this.template.tuesdayStart;
    this.model.tuesdayEnd = this.template.tuesdayEnd;
    this.model.tuesdayNotes = this.template.tuesdayNotes;
    
    this.model.wednesdayStatus = this.template.wednesdayStatus;
    this.model.wednesdayStart = this.template.wednesdayStart;
    this.model.wednesdayEnd = this.template.wednesdayEnd;
    this.model.wednesdayNotes = this.template.wednesdayNotes;

    this.model.thursdayStatus = this.template.thursdayStatus;
    this.model.thursdayStart = this.template.thursdayStart;
    this.model.thursdayEnd = this.template.thursdayEnd;
    this.model.thursdayNotes = this.template.thursdayNotes;

    this.model.fridayStatus = this.template.fridayStatus;
    this.model.fridayStart = this.template.fridayStart;
    this.model.fridayEnd = this.template.fridayEnd;
    this.model.fridayNotes = this.template.fridayNotes;

    this.model.weekNotes = this.template.weekNotes;
  }

  cancel() {
    this._router.navigateByUrl('/board')
  }
}
