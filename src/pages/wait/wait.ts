import { Component, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class WaitPage {
  observableVar: Subscription;
  event;
  days; hours; minutes; seconds;
  constructor(
    public navCtrl: NavController, public navParams: NavParams
  ) {
    this.event = {
      eventName: "Loading"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitPage');

    let event = this.navParams.data.data;
    console.log(event);
    if (event) {
      this.event = event;
      this.observableVar = Observable.interval(1000).subscribe(() => {
        this.runCountdownTimer();
      });
    } else
      this.navCtrl.setRoot("MenuPage");
  }

  ionViewDidLeave() {
    if (this.observableVar) {
      this.observableVar.unsubscribe();
      this.observableVar = null;
    }
  }

  runCountdownTimer() {
    const fourthOfJuly = this.event.eventDate;
    // get today's date
    const today = new Date().getTime();
    // get the difference
    const diff = fourthOfJuly - today;
    // math
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }

}
