import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comanda } from '../../../shared/models/comanda';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-comanda-detalhes',
  templateUrl: './comanda-detalhes.component.html',
  styleUrls: ['./comanda-detalhes.component.scss']
})
export class ComandaDetalhesComponent implements OnInit, OnDestroy {

  comanda$: Observable<Comanda>;

  constructor(private store: Store<any>) {
    this.store.dispatch(actions.selecionarPerfil({ perfil: 'garcom' }));
    this.store.dispatch(actions.obterDetalhesComanda());
    this.comanda$ = this.store.pipe(select(selectors.selectComandaSelecionada));
  }

  fecharComanda() {
    this.store.dispatch(actions.fecharComanda())
  }

  selecionarPedido(pedido) {
    this.store.dispatch(actions.salvarPedidoSelecionado({ pedido }))
  }

  ngOnInit() {
    this.limparPedidoSelecionado();
  }

  ngOnDestroy() {
    this.limparPedidoSelecionado();
  }

  private limparPedidoSelecionado() {
    this.store.dispatch(actions.salvarPedidoSelecionado({ pedido: {} as Pedido }));
  }
}
