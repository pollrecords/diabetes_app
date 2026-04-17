import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangoPageRoutingModule } from './mango-routing.module';

import { MangoPage } from './mango.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MangoPageRoutingModule
    ],
    declarations: [MangoPage]
})
export class MangoPageModule { }
