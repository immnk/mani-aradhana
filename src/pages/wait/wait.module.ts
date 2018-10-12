import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitPage } from './wait';

@NgModule({
  declarations: [
    WaitPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitPage),
  ],
})
export class WaitPageModule {}
