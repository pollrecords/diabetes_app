import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdolescentesPageRoutingModule } from './adolescentes-routing.module';

import { AdolescentesPage } from './adolescentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdolescentesPageRoutingModule
  ],
  declarations: [AdolescentesPage]
})
export class AdolescentesPageModule {}
