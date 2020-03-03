import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';

@Component({
  selector: 'app-movimentador-pedido',
  templateUrl: './movimentador-pedido.component.html',
  styleUrls: ['./movimentador-pedido.component.scss']
})
export class MovimentadorPedidoComponent {
  acoesMovimentacao$: Observable<any[]>;

  constructor(private store: Store<any>) {
    this.acoesMovimentacao$ = this.store.pipe(select(selectors.selectAcoesMovimentacao))
  }

  movimentarPedidoSelecionado(situacao) {
    this.store.dispatch(actions.movimentarPedido({ situacao }))
  }

}
