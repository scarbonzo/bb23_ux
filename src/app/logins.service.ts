import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  private baseUrl = 'http://192.168.100.120:8000/';

  constructor(private httpClient: HttpClient) { }

  getBasicEvents(start: Date, end: Date,
                 search: string,
                 logons: boolean, logoffs: boolean, locks: boolean, unlocks: boolean,
                 take: number, skip: number) {
    let endpoint = 'api/logins';
    endpoint = endpoint + '?search=' + search;
    endpoint = endpoint + '&start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&startups=' + 'true' + '&shutdowns=' + 'true' + '&crashes=' + 'true' + '&renames=' + 'true';
    endpoint = endpoint + '&logons=' + logons + '&logoffs=' + logoffs + '&locks=' + locks + '&unlocks=' + unlocks;
    endpoint = endpoint + '&take=' + take + '&skip=' + skip + '&desc=true';
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
