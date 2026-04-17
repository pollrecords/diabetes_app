import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManzanaPage } from './manzana.page';

const routes: Routes = [
  {
    path: '',
    component: ManzanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManzanaPageRoutingModule {}
