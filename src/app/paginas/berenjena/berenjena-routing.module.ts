import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerenjenaPage } from './berenjena.page';

const routes: Routes = [
  {
    path: '',
    component: BerenjenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerenjenaPageRoutingModule {}
