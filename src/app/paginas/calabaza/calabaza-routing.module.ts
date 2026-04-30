import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalabazaPage } from './calabaza.page';

const routes: Routes = [
  {
    path: '',
    component: CalabazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalabazaPageRoutingModule {}
