import { routerReducer } from '@ngrx/router-store';
import { comandasReducer } from './comandas.reducer';
import { pedidosReducer } from './pedidos.reducer';
import { notificacaoReducer } from './notificacao.reducer';
import { movimentacaoPedidoReducer } from './movimentacao-pedido.reducer';

export default {
  router: routerReducer,
  comandas: comandasReducer,
  pedidos: pedidosReducer,
  notificacao: notificacaoReducer,
  movimentacaoPedido: movimentacaoPedidoReducer
}