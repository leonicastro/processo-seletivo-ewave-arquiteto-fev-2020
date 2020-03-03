import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket, private store: Store<any>) {
    this.connect();
    this.listenComandaAberta();
    this.listenNotificacaoRecebida();
  }

  private connect() {
    this.socket.on('connect', () => {
      console.log('Websocket conected on server...');
    });
  }

  listenComandaAberta() {
    this.socket.on('ComandaCriada', (message) => {
      console.log(message);
    })
  }

  listenNotificacaoRecebida() {
    this.socket.on('PedidoCriado', () => {
      const message = `Um novo pedido foi realizado`
      this.store.dispatch(actions.notificar({ message }));
    })
  }

  listenPedidoRealizado() {
    this.socket.on('PedidoCriado', (message) => {
      this.store.dispatch(actions.notificacaoNovoPedidoCriado(message));
      this.pushNotification({
        titulo: 'Um novo pedido foi realizado',
        link: `/pedidos/${message.id}/detalhes`,
        icon: 'notification-flat.png',
        body: `Pedido: ${message.nome}`
      })
    });
  }

  pushNotification(notification) {
    const options = {
      body: notification.body,
      icon: notification.icon
    }
    var n = new Notification(notification.titulo, options);
    n.addEventListener("click", () => {
      n.close();
      window.focus();
      window.location.href = notification.link;
    });
  }
}
