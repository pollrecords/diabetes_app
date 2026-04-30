import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetabelPage } from './betabel.page';

const routes: Routes = [
  {
    path: '',
    component: BetabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetabelPageRoutingModule {}
