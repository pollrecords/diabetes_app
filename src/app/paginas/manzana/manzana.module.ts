import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManzanaPageRoutingModule } from './manzana-routing.module';

import { ManzanaPage } from './manzana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManzanaPageRoutingModule
  ],
  declarations: [ManzanaPage]
})
export class ManzanaPageModule {}
