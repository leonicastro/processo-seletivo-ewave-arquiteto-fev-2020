import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoConsultaComponent } from './pedido-consulta/pedido-consulta.component';
import { PedidoCadastroComponent } from './pedido-cadastro/pedido-cadastro.component';
import { PedidoDetalhesComponent } from './pedido-detalhes/pedido-detalhes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {

        path: '',
        component: PedidoConsultaComponent
      },
      {
        path: ':pedidoId/detalhes',
        component: PedidoDetalhesComponent
      },
      {
        path: 'comanda/:comandaId/cadastro-pedido',
        component: PedidoCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
