import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LentejaPageRoutingModule } from './lenteja-routing.module';

import { LentejaPage } from './lenteja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LentejaPageRoutingModule
  ],
  declarations: [LentejaPage]
})
export class LentejaPageModule {}
