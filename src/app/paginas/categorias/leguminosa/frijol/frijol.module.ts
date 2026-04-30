import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrijolPageRoutingModule } from './frijol-routing.module';

import { FrijolPage } from './frijol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrijolPageRoutingModule
  ],
  declarations: [FrijolPage]
})
export class FrijolPageModule {}
