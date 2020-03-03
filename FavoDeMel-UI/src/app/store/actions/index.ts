import { createAction, props } from '@ngrx/store';

export * from '../router/router.actions';
export * from './comandas.actions';
export * from './pedidos.actions';
export * from './notificacao.actions';
export * from './movimentacao-pedido.actions';


export const noAction = createAction('State stay equal');
export const handleError = createAction('Handdle error', props<{ error }>())