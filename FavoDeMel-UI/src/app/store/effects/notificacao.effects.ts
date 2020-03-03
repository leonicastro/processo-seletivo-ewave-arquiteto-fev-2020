import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import * as actions from '../actions';
import { Pedido } from '../../shared/models/pedido';
import { AlertService } from '../../core/layout/components/alert/alert.service';

@Injectable()
export class NotificaoEffects {

  notificar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.notificar),
      map(message => (message)),
      mergeMap(({ message }) => {
        this.alertService.mostrarAlert(message);
        return EMPTY;
      })
    )
  );

  notificacaoNovoPedidoCriado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.notificacaoNovoPedidoCriado),
      map((message: any) => {
        const pedidoCriado = {
          ...message
        } as Pedido;
        return pedidoCriado;
      }),
      switchMap(res => [
        actions.carregarPedidosDaCozinha(),
        actions.adicionarAlertaDeNotificacao()
      ])
    )
  );


  handleErrors(error) {
    return of(error);
  }

  constructor(
    private actions$: Actions,
    private alertService: AlertService
  ) { }
}
