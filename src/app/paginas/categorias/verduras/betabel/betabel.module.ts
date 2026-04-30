import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetabelPageRoutingModule } from './betabel-routing.module';

import { BetabelPage } from './betabel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetabelPageRoutingModule
  ],
  declarations: [BetabelPage]
})
export class BetabelPageModule {}
