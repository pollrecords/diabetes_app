import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColiflorPageRoutingModule } from './coliflor-routing.module';

import { ColiflorPage } from './coliflor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColiflorPageRoutingModule
  ],
  declarations: [ColiflorPage]
})
export class ColiflorPageModule {}
