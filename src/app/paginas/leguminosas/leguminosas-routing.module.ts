import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeguminosasPage } from './leguminosas.page';

const routes: Routes = [
  {
    path: '',
    component: LeguminosasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeguminosasPageRoutingModule {}
