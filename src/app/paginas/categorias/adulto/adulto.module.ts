import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultoPageRoutingModule } from './adulto-routing.module';

import { AdultoPage } from './adulto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultoPageRoutingModule
  ],
  declarations: [AdultoPage]
})
export class AdultoPageModule {}
