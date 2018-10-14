import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { APP_CONFIG_TOKEN, AppConfig } from '../../providers/config-service/config-service';

@Injectable()
export class AuthenticationServiceProvider {
  public loggedinUserDetails;

  constructor(public http: HttpClient, @Inject(APP_CONFIG_TOKEN) public config: AppConfig) {
    console.log('Hello AuthenticationServiceProvider Provider');
  }

  validateUser(passkey) {
    return this.http.get(this.config.endPoint + this.config.validate + passkey.toLowerCase());
  }

}
