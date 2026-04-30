import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarbanzoPageRoutingModule } from './garbanzo-routing.module';

import { GarbanzoPage } from './garbanzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarbanzoPageRoutingModule
  ],
  declarations: [GarbanzoPage]
})
export class GarbanzoPageModule {}
