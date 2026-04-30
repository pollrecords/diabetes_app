import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicharoPage } from './chicharo.page';

const routes: Routes = [
  {
    path: '',
    component: ChicharoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChicharoPageRoutingModule {}
