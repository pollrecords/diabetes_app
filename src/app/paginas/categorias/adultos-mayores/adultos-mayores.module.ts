import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultosMayoresPageRoutingModule } from './adultos-mayores-routing.module';

import { AdultosMayoresPage } from './adultos-mayores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultosMayoresPageRoutingModule
  ],
  declarations: [AdultosMayoresPage]
})
export class AdultosMayoresPageModule {}
