import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeguminosasPageRoutingModule } from './leguminosas-routing.module';

import { LeguminosasPage } from './leguminosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeguminosasPageRoutingModule
  ],
  declarations: [LeguminosasPage]
})
export class LeguminosasPageModule {}
