import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, withLatestFrom, switchMap, concatMap, mergeMap } from 'rxjs/operators';
import { ComandasService } from '../../shared/services/comandas.service';
import { Store, select } from '@ngrx/store';

import * as actions from '../actions';
import * as selectors from '../selectors';
import { Comanda } from '../../shared/models/comanda';

@Injectable()
export class ComandasEffects {

  carregarListaComandas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.carregarListaComandas),
      withLatestFrom(
        this.store.pipe(select(selectors.selectGarcomId)),
        (action, garcomId) => ({ action, garcomId })
      ),
      mergeMap(({ garcomId }) => {
        return this.comandasService.carregarListaComandas(garcomId)
      }),
      switchMap(res => [
        actions.salvarListaDeComandas({ comandas: res }),
      ])
    )
  );

  abrirComanda$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.abrirComanda),
      withLatestFrom(
        this.store.pipe(select(selectors.selectGarcomId)),
        ({ comanda }, garcomId) => ({ comanda, garcomId })
      ),
      mergeMap(({ comanda, garcomId }) => {
        const model = {
          ...comanda,
          garcomId
        } as Comanda;
        return this.comandasService.abrirComanda(model);
      }),
      switchMap(res => [
        actions.salvarComanda({ comanda: res }),
        actions.salvarComandaSelecionada({ comanda: res }),
        actions.routerChange({ navigateTo: ['comandas', res.id, 'detalhes'], navigationExtras: null }),
      ]),
      catchError(error => this.handleErrors(error))
    )
  );

  fecharComanda$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fecharComanda),
      concatMap(action => of(action).pipe(
        withLatestFrom(
          this.store.pipe(select(selectors.selectComandaSelecionada)),
          (action, comanda) => ({ action, comandaId: comanda.id })
        )
      )),
      mergeMap(({ comandaId }) => {
        return this.comandasService.fecharComanda(comandaId).pipe(
          map(() => actions.removeComandaFechada({ comandaId }))
        )
      }),
      switchMap(() => [
        actions.routerChange({ navigateTo: ['comandas'], navigationExtras: null })
      ]),
      catchError(error => this.handleErrors(error))
    )
  );

  obterDetalhesComanda$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.obterDetalhesComanda),
      withLatestFrom(
        this.store.select(selectors.selectRouteComandaId),
        (action, comandaId) => ({ action, comandaId })
      ),
      switchMap(({ comandaId }) => {
        return this.comandasService.obterComandaPorId(comandaId).pipe(
          map(comanda => actions.salvarComandaSelecionada({ comanda }))
        )
      }),
      catchError(error => this.handleErrors(error))
    )
  );

  handleErrors(error) {
    return of(error);
  }


  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private comandasService: ComandasService
  ) { }
}
