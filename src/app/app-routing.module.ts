import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./paginas/recomendaciones/semaforo.module').then(m => m.SemaforoPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./paginas/info/info.module').then(m => m.InfoPageModule)
  },
  {
    path: 'manzana',
    loadChildren: () => import('./paginas/manzana/manzana.module').then(m => m.ManzanaPageModule)
  },
  {
    path: 'naranja',
    loadChildren: () => import('./paginas/naranja/naranja.module').then(m => m.NaranjaPageModule)
  },
  {
    path: 'fresa',
    loadChildren: () => import('./paginas/fresa/fresa.module').then(m => m.FresaPageModule)
  },
  {
    path: 'pera',
    loadChildren: () => import('./paginas/pera/pera.module').then(m => m.PeraPageModule)
  },
  {
    path: 'sandia',
    loadChildren: () => import('./paginas/sandia/sandia.module').then(m => m.SandiaPageModule)
  },
  {
    path: 'mango',
    loadChildren: () => import('./paginas/mango/mango.module').then(m => m.MangoPageModule)
  },
  {
    path: 'verdura',
    loadChildren: () => import('./paginas/verdura/verdura.module').then(m => m.VerduraPageModule)
  },
  {
    path: 'leguminosas',
    loadChildren: () => import('./paginas/leguminosas/leguminosas.module').then(m => m.LeguminosasPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
