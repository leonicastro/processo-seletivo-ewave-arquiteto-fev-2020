import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { Observable } from 'rxjs';
import { Pedido } from '../../../shared/models/pedido';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-pedido-consulta',
  templateUrl: './pedido-consulta.component.html',
  styleUrls: ['./pedido-consulta.component.scss']
})
export class PedidoConsultaComponent {

  pedidosAguardandoRecebimento$: Observable<Pedido>;
  alertNotificacoes$: Observable<number>;

  constructor(
    private store: Store<any>,
    private notification: NotificationService
  ) {
    this.notification.listenPedidoRealizado();
    this.store.dispatch(actions.carregarPedidosDaCozinha());
    this.pedidosAguardandoRecebimento$ = this.store.select(selectors.selectPedidosAguardandoRecebimento);
    this.alertNotificacoes$ = this.store.select(selectors.selectAlertNotificacoes);
  }
}
