import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CacahuatePageRoutingModule } from './cacahuate-routing.module';

import { CacahuatePage } from './cacahuate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CacahuatePageRoutingModule
  ],
  declarations: [CacahuatePage]
})
export class CacahuatePageModule {}
