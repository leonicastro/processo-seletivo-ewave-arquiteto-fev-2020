import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pedido } from '../../../shared/models/pedido';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';

@Component({
  selector: 'app-pedido-detalhes',
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.scss']
})
export class PedidoDetalhesComponent {

  pedido$: Observable<Pedido>;

  constructor(private store: Store<any>) {
    this.store.dispatch(actions.selecionarPerfil({ perfil: 'cozinha' }));
    this.store.dispatch(actions.obterDetalhesPedido());
    this.pedido$ = this.store.select(selectors.selectPedidoSelecionado);
  }
}
