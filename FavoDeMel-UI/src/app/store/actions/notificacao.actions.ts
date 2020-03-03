import { createAction, props } from '@ngrx/store';
import { type } from '../utils';

const action = name => (type(`[Notificação] - ${name}`));
export const notificacaoNovoPedidoCriado = createAction(action('Novo pedido foi criado'), props<{ message: any }>());
export const notificar = createAction(action('Notifica sobre uma nova atualização'), props<{ message: any }>());
export const adicionarAlertaDeNotificacao = createAction(action('Adionadar novo alerta de notificação'));
export const removeAlertaDeNotificacao = createAction(action('Remove alerta de notificação'));