import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrijolPage } from './frijol.page';

const routes: Routes = [
  {
    path: '',
    component: FrijolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrijolPageRoutingModule {}
