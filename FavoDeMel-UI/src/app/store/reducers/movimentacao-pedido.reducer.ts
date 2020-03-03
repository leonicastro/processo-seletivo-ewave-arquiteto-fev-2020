import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

const initialState = {
  acoes: [],
  perfil: ''
};

const _movimentacaoPedidoReducer = createReducer(initialState,
  on(actions.selecionarPerfil, (state, { perfil: perfilSelecionado }) => {
    return {
      ...state,
      perfil: perfilSelecionado
    };
  })
);
export function movimentacaoPedidoReducer(state, action) {
  return _movimentacaoPedidoReducer(state, action);
}
