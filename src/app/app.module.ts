import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { AppConfig, APP_DI_CONFIG, APP_CONFIG_TOKEN } from '../providers/config-service/config-service';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { EventProvider } from '../providers/event/event';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: APP_CONFIG_TOKEN, useValue: APP_DI_CONFIG },
    AuthenticationServiceProvider,
    EventProvider
  ]
})
export class AppModule {}
