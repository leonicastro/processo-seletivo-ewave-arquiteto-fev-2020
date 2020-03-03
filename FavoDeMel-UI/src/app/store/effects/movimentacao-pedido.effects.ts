import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { PedidosService } from 'src/app/shared/services/pedidos.service';
import { Store } from '@ngrx/store';
import * as actions from '../actions';
import * as selectors from '../selectors';


@Injectable()
export class MovimentacaoPedidoEffects {

  movimentarPedido$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.movimentarPedido),
      withLatestFrom(
        this.store.select(selectors.selectPedidoSelecionado),
        ({ situacao }, pedidoSelecionado) => ({ situacao, pedidoId: pedidoSelecionado.id })
      ),
      switchMap(({ situacao, pedidoId }) =>
        this.pedidosService.put(`${pedidoId}/movimentar`, { situacao })
      ),
      withLatestFrom(
        this.store.select(selectors.selectPerfilSelecionado),
        (response, perfilSelecionado) => ({ response, perfilSelecionado })
      ),
      switchMap(({ response, perfilSelecionado }) => {

        let actionsResult = [];

        if (perfilSelecionado === 'cozinha') {
          actionsResult = [
            actions.salvarPedidoSelecionado({ pedido: response }),
            actions.removeAlertaDeNotificacao(),
            actions.routerChange({ navigateTo: ['/pedidos'], navigationExtras: null })
          ]
        } else if (perfilSelecionado === 'garcom') {
          actionsResult = [
            actions.obterDetalhesComanda(),
            actions.salvarPedidoSelecionado({ pedido: response })
          ]
        }
        return actionsResult;
      })
    )
  );


  handleErrors(error) {
    return of(error);
  }

  constructor(
    private actions$: Actions,
    private pedidosService: PedidosService,
    private store: Store<any>
  ) { }
}
