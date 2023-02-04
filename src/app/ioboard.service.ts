import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class IoboardService {
  private baseUrl = 'http://192.168.100.120:8088/api/';

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.baseUrl + 'user/');
  }

  getUser(username: string) {
    return this.httpClient.get(this.baseUrl + 'user/' + username);
  }

  getGroup(groupname: string) {
    return this.httpClient.get(this.baseUrl + 'group/' + groupname);
  }

  createUser(model: User) {
    return this.httpClient.get(this.baseUrl + 'user/create' +
      '?username=' + model.username +
      '&firstname=' + model.firstName +
      '&group=' + model.group +
      '&mondayStatus=' + model.mondayStatus +
      '&tuesdayStatus=' + model.tuesdayStatus +
      '&wednesdayStatus=' + model.wednesdayStatus +
      '&thursdayStatus=' + model.thursdayStatus +
      '&fridayStatus=' + model.fridayStatus +
      '&mondayHours=' + model.mondayHours +
      '&tuesdayHours=' + model.tuesdayHours +
      '&wednesdayHours=' + model.wednesdayHours +
      '&thursdayHours=' + model.thursdayHours +
      '&fridayHours=' + model.fridayHours +
      '&enabled=' + model.enabled
    );
  }

  updateUser(model: User) {
    return this.httpClient.get(this.baseUrl + 'user/update' +
      '?username=' + model.username +
      '&firstname=' + model.firstName +
      '&group=' + model.group +
      '&mondayStatus=' + model.mondayStatus +
      '&tuesdayStatus=' + model.tuesdayStatus +
      '&wednesdayStatus=' + model.wednesdayStatus +
      '&thursdayStatus=' + model.thursdayStatus +
      '&fridayStatus=' + model.fridayStatus +
      '&mondayHours=' + model.mondayHours +
      '&tuesdayHours=' + model.tuesdayHours +
      '&wednesdayHours=' + model.wednesdayHours +
      '&thursdayHours=' + model.thursdayHours +
      '&fridayHours=' + model.fridayHours +
      '&enabled=' + model.enabled
    );
  }

  deleteUser(username: string) {
    return this.httpClient.get(
      this.baseUrl + 'user/delete/' + username
    );
  }
}