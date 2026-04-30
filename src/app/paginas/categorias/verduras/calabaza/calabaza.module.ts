import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalabazaPageRoutingModule } from './calabaza-routing.module';

import { CalabazaPage } from './calabaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalabazaPageRoutingModule
  ],
  declarations: [CalabazaPage]
})
export class CalabazaPageModule {}
