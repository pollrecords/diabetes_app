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
    loadChildren: () => import('./paginas/categorias/frutas/manzana/manzana.module').then(m => m.ManzanaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./paginas/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'naranja',
    loadChildren: () => import('./paginas/categorias/frutas/naranja/naranja.module').then(m => m.NaranjaPageModule)
  },
  {
    path: 'fresa',
    loadChildren: () => import('./paginas/categorias/frutas/fresa/fresa.module').then(m => m.FresaPageModule)
  },
  {
    path: 'pera',
    loadChildren: () => import('./paginas/categorias/frutas/pera/pera.module').then(m => m.PeraPageModule)
  },
  {
    path: 'sandia',
    loadChildren: () => import('./paginas/categorias/frutas/sandia/sandia.module').then(m => m.SandiaPageModule)
  },
  {
    path: 'mango',
    loadChildren: () => import('./paginas/categorias/frutas/mango/mango.module').then(m => m.MangoPageModule)
  },
  {
    path: 'verdura',
    loadChildren: () => import('./paginas/verdura/verdura.module').then(m => m.VerduraPageModule)
  },
  {
    path: 'leguminosas',
    loadChildren: () => import('./paginas/leguminosas/leguminosas.module').then(m => m.LeguminosasPageModule)
  },
  {
    path: 'frijol',
    loadChildren: () => import('./paginas/categorias/leguminosa/frijol/frijol.module').then(m => m.FrijolPageModule)
  },
  {
    path: 'lenteja',
    loadChildren: () => import('./paginas/categorias/leguminosa/lenteja/lenteja.module').then(m => m.LentejaPageModule)
  },
  {
    path: 'arroz',
    loadChildren: () => import('./paginas/categorias/leguminosa/arroz/arroz.module').then(m => m.ArrozPageModule)
  },
  {
    path: 'cacahuate',
    loadChildren: () => import('./paginas/categorias/leguminosa/cacahuate/cacahuate.module').then(m => m.CacahuatePageModule)
  },
  {
    path: 'apio',
    loadChildren: () => import('./paginas/categorias/verduras/apio/apio.module').then( m => m.ApioPageModule)
  },
  {
    path: 'brocoli',
    loadChildren: () => import('./paginas/categorias/verduras/brocoli/brocoli.module').then( m => m.BrocoliPageModule)
  },
  {
    path: 'calabaza',
    loadChildren: () => import('./paginas/categorias/verduras/calabaza/calabaza.module').then( m => m.CalabazaPageModule)
  },
  {
    path: 'coliflor',
    loadChildren: () => import('./paginas/categorias/verduras/coliflor/coliflor.module').then( m => m.ColiflorPageModule)
  },
  {
    path: 'chicharo',
    loadChildren: () => import('./paginas/categorias/leguminosa/chicharo/chicharo.module').then( m => m.ChicharoPageModule)
  },
  {
    path: 'garbanzo',
    loadChildren: () => import('./paginas/categorias/leguminosa/garbanzo/garbanzo.module').then( m => m.GarbanzoPageModule)
  },
  {
    path: 'betabel',
    loadChildren: () => import('./paginas/categorias/verduras/betabel/betabel.module').then( m => m.BetabelPageModule)
  },
  {
    path: 'berenjena',
    loadChildren: () => import('./paginas/categorias/verduras/berenjena/berenjena.module').then( m => m.BerenjenaPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
