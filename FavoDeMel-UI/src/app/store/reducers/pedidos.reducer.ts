import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Pedido } from '../../shared/models/pedido';

const initialState = {
  pedidosAguardandoRecebimento: new Array<Pedido>(),
  pedidoSelecionado: {}
};

const _pedidosReducer = createReducer(initialState,
  on(actions.salvarListaDePedidosDaCozinha, (state, { pedidos }) => {
    return {
      ...state,
      pedidosAguardandoRecebimento: pedidos
    };
  }),
  on(actions.salvarPedidoSelecionado, (state, { pedido }) => {
    return {
      ...state,
      pedidoSelecionado: pedido
    };
  }),
);
export function pedidosReducer(state, action) {
  return _pedidosReducer(state, action);
}
