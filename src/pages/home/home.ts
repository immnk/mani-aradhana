import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events = [];
  constructor(public navCtrl: NavController, public event: EventProvider,
    public auth: AuthenticationServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.event.getAllEvents(this.auth.loggedinUserDetails)
      .subscribe((response: any) => {
        console.log("Events: ", response);
        if (response.success == true) {
          let events = response.body;
          let currentDate = new Date().getTime();
          this.events = events.filter(event => event.eventDate > currentDate);
        }
      });
  }

  openEvent(event) {
    this.navCtrl.push("WaitPage", {
      data: event
    });
  }
}
