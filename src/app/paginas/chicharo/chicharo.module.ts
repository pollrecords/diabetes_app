import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicharoPageRoutingModule } from './chicharo-routing.module';

import { ChicharoPage } from './chicharo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChicharoPageRoutingModule
  ],
  declarations: [ChicharoPage]
})
export class ChicharoPageModule {}
