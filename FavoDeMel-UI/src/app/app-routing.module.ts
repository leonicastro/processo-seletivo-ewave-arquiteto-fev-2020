import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'comandas',
    loadChildren: () => import('./pages/comanda/comanda.module').then(m => m.ComandaModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pages/pedido/pedido.module').then(m => m.PedidoModule)
  },
  {
    path: '**',
    // redirectTo: 'page-not-found'
    component: PageNotFoundComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
