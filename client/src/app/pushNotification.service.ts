import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000/subscription';
// const SERVER_URL = 'http://172.16.1.62:8080/subscription';

@Injectable()
export class PushNotificationService {
  constructor(private http: HttpClient) {}

  public sendSubscriptionToTheServer(subscription) {
    debugger
    return this.http.post(SERVER_URL, subscription);
  }
}
