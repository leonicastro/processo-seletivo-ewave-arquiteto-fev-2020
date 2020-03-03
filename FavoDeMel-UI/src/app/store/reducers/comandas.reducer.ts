import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Comanda } from '../../shared/models/comanda';

const initialState = {
  comandas: new Array<Comanda>(),
  todasComandas: new Array<Comanda>(), // registro para backup quando realiza filtro,
  comandaSelecionada: {}
};

const _comandasReducer = createReducer(initialState,
  on(actions.salvarListaDeComandas, (state, { comandas }) => {
    return {
      ...state,
      comandas,
      todasComandas: comandas
    };
  }),
  on(actions.salvarComanda, (state, { comanda }) => {
    let { comandas } = state;

    comandas = [...comandas, comanda];

    return {
      ...state,
      comandas,
      todasComandas: comandas
    };
  }),
  on(actions.filtrarComandaPorNumeroDaMesa, (state, { numeroMesa }) => {
    let { comandas, todasComandas } = state;

    comandas = [...todasComandas];

    if (numeroMesa && numeroMesa > 0) {
      comandas = [...comandas.filter(x => x.numeroMesa === numeroMesa)];
    }

    return {
      ...state,
      comandas,
      todasComandas
    }
  }),
  on(actions.salvarComandaSelecionada, (state, { comanda }) => {
    return {
      ...state,
      comandaSelecionada: comanda
    }
  }),
  on(actions.removeComandaFechada, (state, { comandaId }) => {

    let { comandas, todasComandas } = state;

    comandas = [...comandas.filter(x => x.id !== comandaId)];
    todasComandas = [...comandas];

    return {
      ...state,
      comandas,
      todasComandas,
      comandaSelecionada: initialState.comandaSelecionada
    }
  })
);

export function comandasReducer(state, action) {
  return _comandasReducer(state, action);
}
