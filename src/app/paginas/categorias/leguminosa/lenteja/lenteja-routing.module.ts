import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LentejaPage } from './lenteja.page';

const routes: Routes = [
  {
    path: '',
    component: LentejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LentejaPageRoutingModule {}
