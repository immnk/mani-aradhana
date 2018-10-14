import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: string = "HomePage";
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    if (page == "LoginPage")
      this.storage.set("loggedInUser", null);
    this.navCtrl.setRoot(page);
  }

}
