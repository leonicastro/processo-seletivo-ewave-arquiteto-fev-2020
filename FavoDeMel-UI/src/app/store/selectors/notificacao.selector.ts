import { createSelector } from '@ngrx/store';

export const selectNotificacao = (state) => (state.notificacao);

export const selectAlertNotificacoes = createSelector(selectNotificacao,
  (state) => state.alertNotificacoes);