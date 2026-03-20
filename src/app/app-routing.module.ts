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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
