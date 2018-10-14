import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { APP_CONFIG_TOKEN, AppConfig } from '../../providers/config-service/config-service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventProvider {

  constructor(public http: HttpClient, @Inject(APP_CONFIG_TOKEN) public config: AppConfig) {
    console.log('Hello EventProvider Provider');
  }

  getAllEvents(permission) {
    return this.http.get(this.config.endPoint + this.config.getAllEvents + permission);
  }

}
