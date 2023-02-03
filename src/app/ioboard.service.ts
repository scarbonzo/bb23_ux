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
      '&monday=' + model.monday +
      '&tuesday=' + model.tuesday +
      '&wednesday=' + model.wednesday +
      '&thursday=' + model.thursday +
      '&friday=' + model.friday +
      '&enabled=' + model.enabled
    );
  }
}