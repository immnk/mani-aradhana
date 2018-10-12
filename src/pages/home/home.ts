import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  password = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  testPassword() {
    console.log("HomeComponent: ", this.password);
    if (this.password.toLowerCase() == "mani25" || this.password.toLowerCase() == "mani24") {
      this.navCtrl.push("WaitPage");
    } else {
      const alert = this.alertCtrl.create({
        title: 'Wrong Password!',
        subTitle: 'You have entered the wrong password. Please enter a alpha-numeric password that is 6 characters in length!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
