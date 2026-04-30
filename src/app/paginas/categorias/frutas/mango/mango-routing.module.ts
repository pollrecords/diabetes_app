import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangoPage } from './mango.page';

const routes: Routes = [
    {
        path: '',
        component: MangoPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MangoPageRoutingModule { }
