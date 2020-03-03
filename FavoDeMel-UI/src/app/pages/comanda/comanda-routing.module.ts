import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComandasConsultaComponent } from './comanda-consulta/comanda-consulta.component';
import { ComandaDetalhesComponent } from './comanda-detalhes/comanda-detalhes.component';
import { ComandaCadastroComponent } from './comanda-cadastro/comanda-cadastro.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {

        path: '',
        component: ComandasConsultaComponent
      },
      {
        path: ':comandaId/detalhes',
        component: ComandaDetalhesComponent
      },
      {
        path: 'cadastro',
        component: ComandaCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComandaRoutingModule { }
