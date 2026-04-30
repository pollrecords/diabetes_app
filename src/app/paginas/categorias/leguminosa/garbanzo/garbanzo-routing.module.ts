import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarbanzoPage } from './garbanzo.page';

const routes: Routes = [
  {
    path: '',
    component: GarbanzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarbanzoPageRoutingModule {}
