import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColiflorPage } from './coliflor.page';

const routes: Routes = [
  {
    path: '',
    component: ColiflorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColiflorPageRoutingModule {}
