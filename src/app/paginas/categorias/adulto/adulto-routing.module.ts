import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultoPage } from './adulto.page';

const routes: Routes = [
  {
    path: '',
    component: AdultoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultoPageRoutingModule {}
