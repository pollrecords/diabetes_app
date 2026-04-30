import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacahuatePage } from './cacahuate.page';

const routes: Routes = [
  {
    path: '',
    component: CacahuatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CacahuatePageRoutingModule {}
