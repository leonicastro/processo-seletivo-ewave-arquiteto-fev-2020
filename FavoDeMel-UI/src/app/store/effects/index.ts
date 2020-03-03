import { ComandasEffects } from './comandas.effects';
import { RouterEffects } from '../router/router.effects';
import { PedidosEffects } from './pedidos.effects';
import { NotificaoEffects } from './notificacao.effects';
import { MovimentacaoPedidoEffects } from './movimentacao-pedido.effects';

export default [
  RouterEffects,
  NotificaoEffects,
  ComandasEffects,
  PedidosEffects,
  MovimentacaoPedidoEffects
]