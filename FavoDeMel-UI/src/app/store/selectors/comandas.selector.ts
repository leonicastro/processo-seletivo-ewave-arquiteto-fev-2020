import { createSelector } from '@ngrx/store';
import { SituacaoComanda } from '../../shared/enums/situacao-comanda.enum';
import * as fromRouter from '../router/router.selectors'

export const selectComandas = (state) => (state.comandas);

export const selectComandasAbertas = createSelector(selectComandas, (state) => state.comandas.filter(x => x.situacao === SituacaoComanda.Aberta));
export const selectComandaSelecionada = createSelector(selectComandas, (state) => state.comandaSelecionada);
export const selectRouteComandaId = fromRouter.selectRouteParam('comandaId');