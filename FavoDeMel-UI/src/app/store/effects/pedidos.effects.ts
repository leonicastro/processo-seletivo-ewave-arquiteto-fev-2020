import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap, mergeMap, map, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as actions from '../actions';
import * as selectors from '../selectors';
import { PedidosService } from '../../shared/services/pedidos.service';
import { SituacaoPedido } from '../../shared/enums/situacao-pedido.enum';
import { Pedido } from 'src/app/shared/models/pedido';

@Injectable()
export class PedidosEffects {


  carregarListaPedidosAguardandoRecebimento$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.carregarPedidosDaCozinha),
      mergeMap(() =>
        this.pedidosService.carregarPedidosPorPerfil('cozinha')
      ),
      switchMap(res => [
        actions.salvarListaDePedidosDaCozinha({ pedidos: res }),
      ]),
      catchError(error => this.handleErrors(error))
    )
  );

  realizarPedido$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.realizarPedido),
      withLatestFrom(
        this.store.select(selectors.selectRouteComandaId),
        ({ pedido }, comandaId) => ({ pedido, comandaId })
      ),
      mergeMap(({ pedido, comandaId }) => {
        const model = {
          ...pedido,
          comandaId
        } as Pedido;
        return this.pedidosService.post(model);
      }),
      switchMap(res => [
        actions.routerChange({ navigateTo: ['comandas', res.comandaId, 'detalhes'], navigationExtras: null }),
      ]),
      catchError(error => this.handleErrors(error))
    )
  );

  obterDetalhesPedido$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.obterDetalhesPedido),
      withLatestFrom(
        this.store.select(selectors.selectRoutePedidoId),
        (action, pedidoId) => ({ action, pedidoId })
      ),
      switchMap(({ pedidoId }) => {
        return this.pedidosService.getById(pedidoId)
      }),
      switchMap((result) => {
        return [
          actions.salvarPedidoSelecionado({ pedido: result })
        ]
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
    private pedidosService: PedidosService
  ) { }
}
