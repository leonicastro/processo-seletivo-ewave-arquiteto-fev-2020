import { createAction, props } from '@ngrx/store';
import { type } from '../utils';
import { SituacaoPedido } from 'src/app/shared/enums/situacao-pedido.enum';

const action = name => (type(`[Movimentação Pedido] - ${name}`));
export const selecionarPerfil = createAction(action('Selecionar o perfil'), props<{ perfil: string }>());
export const movimentarPedido = createAction(action('Movimentar pedido'), props<{ situacao: SituacaoPedido }>());