import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User2 } from './user2';
import { Template } from './template';

@Injectable({
  providedIn: 'root'
})
export class InoutboardService {
  private baseUrl = 'http://192.168.100.120:8999/api/';
  //private baseUrl = 'https://localhost:44362/api/';
  
  constructor(private httpClient: HttpClient) { }

  getGroupMembers(groupname: string) {
    return this.httpClient.get(this.baseUrl + 'v2/group/' + groupname);
  }

  getStatuses() {
    return this.httpClient.get(this.baseUrl + 'status/');
  }

  getGroups() {
    return this.httpClient.get(this.baseUrl + 'group/');
  }

  getUser(username: string) {
    return this.httpClient.get(this.baseUrl + 'user/' + username);
  }

  createUser(model: User2) {
    return this.httpClient.get(this.baseUrl + 'user/create' +
      '?username=' + model.username +
      '&firstname=' + model.firstName +
      '&group=' + model.group +
      '&mondayStatus=' + model.mondayStatus +
      '&tuesdayStatus=' + model.tuesdayStatus +
      '&wednesdayStatus=' + model.wednesdayStatus +
      '&thursdayStatus=' + model.thursdayStatus +
      '&fridayStatus=' + model.fridayStatus +
      '&mondayStart=' + model.mondayStart +
      '&tuesdayStart=' + model.tuesdayStart +
      '&wednesdayStart=' + model.wednesdayStart +
      '&thursdayStart=' + model.thursdayStart +
      '&fridayStart=' + model.fridayStart +
      '&mondayEnd=' + model.mondayEnd +
      '&tuesdayEnd=' + model.tuesdayEnd +
      '&wednesdayEnd=' + model.wednesdayEnd +
      '&thursdayEnd=' + model.thursdayEnd +
      '&fridayEnd=' + model.fridayEnd +
      '&mondayNotes=' + model.mondayNotes +
      '&tuesdayNotes=' + model.tuesdayNotes +
      '&wednesdayNotes=' + model.wednesdayNotes +
      '&thursdayNotes=' + model.thursdayNotes +
      '&fridayNotes=' + model.fridayNotes +
      '&weekNotes=' + model.weekNotes +
      '&enabled=' + model.enabled
    );
  }

  updateUser(model: User2) {
    
    if(model.mondayNotes == null) { model.mondayNotes = ""; }
    if(model.tuesdayNotes == null) { model.tuesdayNotes = ""; }
    if(model.wednesdayNotes == null) { model.wednesdayNotes = ""; }
    if(model.thursdayNotes == null) { model.thursdayNotes = ""; }
    if(model.fridayNotes == null) { model.fridayNotes = ""; }
    if(model.weekNotes == null) { model.weekNotes = ""; }

    return this.httpClient.get(this.baseUrl + 'user/update' +
      '?username=' + model.username +
      '&firstname=' + model.firstName +
      '&group=' + model.group +
      '&mondayStatus=' + model.mondayStatus +
      '&tuesdayStatus=' + model.tuesdayStatus +
      '&wednesdayStatus=' + model.wednesdayStatus +
      '&thursdayStatus=' + model.thursdayStatus +
      '&fridayStatus=' + model.fridayStatus +
      '&mondayStart=' + model.mondayStart +
      '&tuesdayStart=' + model.tuesdayStart +
      '&wednesdayStart=' + model.wednesdayStart +
      '&thursdayStart=' + model.thursdayStart +
      '&fridayStart=' + model.fridayStart +
      '&mondayEnd=' + model.mondayEnd +
      '&tuesdayEnd=' + model.tuesdayEnd +
      '&wednesdayEnd=' + model.wednesdayEnd +
      '&thursdayEnd=' + model.thursdayEnd +
      '&fridayEnd=' + model.fridayEnd +
      '&mondayNotes=' + model.mondayNotes +
      '&tuesdayNotes=' + model.tuesdayNotes +
      '&wednesdayNotes=' + model.wednesdayNotes +
      '&thursdayNotes=' + model.thursdayNotes +
      '&fridayNotes=' + model.fridayNotes +
      '&weekNotes=' + model.weekNotes +
      '&enabled=' + model.enabled
    );
  }
  
  getUserTemplate(username: string) {
    return this.httpClient.get(this.baseUrl + 'template/' + username);
  }

  updateTemplate(model: Template) {
    if(model.mondayNotes == null) { model.mondayNotes = ""; }
    if(model.tuesdayNotes == null) { model.tuesdayNotes = ""; }
    if(model.wednesdayNotes == null) { model.wednesdayNotes = ""; }
    if(model.thursdayNotes == null) { model.thursdayNotes = ""; }
    if(model.fridayNotes == null) { model.fridayNotes = ""; }
    if(model.weekNotes == null) { model.weekNotes = ""; }

    return this.httpClient.get(this.baseUrl + 'template/update' +
      '?username=' + model.username +
      '&mondayStatus=' + model.mondayStatus +
      '&tuesdayStatus=' + model.tuesdayStatus +
      '&wednesdayStatus=' + model.wednesdayStatus +
      '&thursdayStatus=' + model.thursdayStatus +
      '&fridayStatus=' + model.fridayStatus +
      '&mondayStart=' + model.mondayStart +
      '&tuesdayStart=' + model.tuesdayStart +
      '&wednesdayStart=' + model.wednesdayStart +
      '&thursdayStart=' + model.thursdayStart +
      '&fridayStart=' + model.fridayStart +
      '&mondayEnd=' + model.mondayEnd +
      '&tuesdayEnd=' + model.tuesdayEnd +
      '&wednesdayEnd=' + model.wednesdayEnd +
      '&thursdayEnd=' + model.thursdayEnd +
      '&fridayEnd=' + model.fridayEnd +
      '&mondayNotes=' + model.mondayNotes +
      '&tuesdayNotes=' + model.tuesdayNotes +
      '&wednesdayNotes=' + model.wednesdayNotes +
      '&thursdayNotes=' + model.thursdayNotes +
      '&fridayNotes=' + model.fridayNotes +
      '&weekNotes=' + model.weekNotes +
      '&autoApply=' + model.autoApply
    );
  }
}
