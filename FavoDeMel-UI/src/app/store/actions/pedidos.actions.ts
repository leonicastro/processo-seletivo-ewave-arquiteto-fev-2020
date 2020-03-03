import { createAction, props } from '@ngrx/store';
import { type } from '../utils';
import { Pedido } from '../../shared/models/pedido';

const action = name => (type(`[Pedido] - ${name}`));


export const carregarPedidosDaCozinha = createAction(action('Carregar lista de pedidos da cozinha.'));
export const salvarListaDePedidosDaCozinha = createAction(action('Salva a lista de pedidos da cozinha'),
  props<{ pedidos: Pedido[] }>()
);
export const realizarPedido = createAction(action('Realizar um pedido'), props<{ pedido: Pedido }>());
export const obterDetalhesPedido = createAction(action('Obter detalhes do pedido'));
export const salvarPedidoSelecionado = createAction(action('Salvar o pedido selecionado na store'), props<{ pedido: Pedido }>());
