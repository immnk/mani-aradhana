import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, Loading, LoadingController } from 'ionic-angular';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password = "";
  loading: Loading;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public auth: AuthenticationServiceProvider
  ) { }

  testPassword() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30000 // How many milliseconds to wait before hiding the indicator.
    });
    this.loading.present();
    this.auth.validateUser(this.password)
      .subscribe((response: any) => {
        this.loading.dismiss();
        if (response.success == true) {
          this.auth.loggedinUserDetails = response.body;
          console.log("user authenticated :: " + this.auth.loggedinUserDetails);
          this.navCtrl.push("HomePage");
        } else {
          let errorMessage = response.errorMessage || 'You have entered the wrong password. Please enter a alpha-numeric password that is 6 characters in length!';
          const alert = this.alertCtrl.create({
            title: 'Wrong Password!',
            subTitle: errorMessage,
            buttons: ['OK']
          });
          alert.present();
        }
      });
  }


}
