import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

const initialState = {
  alertNotificacoes: 0,
};

const _notificacaoReducer = createReducer(initialState,
  on(actions.adicionarAlertaDeNotificacao, (state) => {
    let { alertNotificacoes } = state;
    alertNotificacoes = alertNotificacoes + 1;

    return {
      ...state,
      alertNotificacoes
    };
  }),
  on(actions.removeAlertaDeNotificacao, (state) => {
    let { alertNotificacoes } = state;

    if (alertNotificacoes > 0) {
      alertNotificacoes = alertNotificacoes - 1;
    }

    return {
      ...state,
      alertNotificacoes
    };
  })
);
export function notificacaoReducer(state, action) {
  return _notificacaoReducer(state, action);
}
