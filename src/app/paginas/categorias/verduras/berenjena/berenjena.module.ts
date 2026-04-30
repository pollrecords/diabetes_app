import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerenjenaPageRoutingModule } from './berenjena-routing.module';

import { BerenjenaPage } from './berenjena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerenjenaPageRoutingModule
  ],
  declarations: [BerenjenaPage]
})
export class BerenjenaPageModule {}
