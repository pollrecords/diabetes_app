import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FresaPageRoutingModule } from './fresa-routing.module';

import { FresaPage } from './fresa.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FresaPageRoutingModule
    ],
    declarations: [FresaPage]
})
export class FresaPageModule { }
