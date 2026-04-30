import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FresaPage } from './fresa.page';

const routes: Routes = [
    {
        path: '',
        component: FresaPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FresaPageRoutingModule { }
