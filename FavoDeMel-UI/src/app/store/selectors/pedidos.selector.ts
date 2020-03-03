import { createSelector } from '@ngrx/store';
import * as fromRouter from '../router/router.selectors'


export const selectPedidos = (state) => (state.pedidos);

export const selectPedidosAguardandoRecebimento = createSelector(selectPedidos,
  (state) => state.pedidosAguardandoRecebimento);

export const selectRoutePedidoId = fromRouter.selectRouteParam('pedidoId');
export const selectPedidoSelecionado = createSelector(selectPedidos, (state) => state.pedidoSelecionado);