import { createAction, props } from '@ngrx/store';
import { Comanda } from '../../shared/models/comanda';
import { type } from '../utils';

const action = name => (type(`[Comanda] - ${name}`));

export const carregarListaComandas = createAction(action('Carregar lista de comandas abertas pelo garçom'));
export const salvarListaDeComandas = createAction(action('Salvar lista de comandas abertas'), props<{ comandas: Comanda[] }>());
export const abrirComanda = createAction(action('Abrir comanda'), props<{ comanda: Comanda }>());
export const salvarComanda = createAction(action('Adicionar comanda aberta na lista de comandas'), props<{ comanda: Comanda }>());
export const fecharComanda = createAction(action('Fechar a comanda selecionada'));
export const removeComandaFechada = createAction(action('Remover comanda fechada da lista'), props<{ comandaId: string }>());
export const obterDetalhesComanda = createAction(action('Obter detalhes da comanda'));
export const filtrarComandaPorNumeroDaMesa = createAction(action('Filtrar comandas por numero da mesa'), props<{ numeroMesa: number }>());
export const selecionarComanda = createAction(action('Seleciona comanda'), props<{ comandaId: string }>());
export const salvarComandaSelecionada = createAction(action('Salvar detalhes da comanda selecionada'), props<{ comanda: Comanda }>());
