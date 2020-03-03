import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService extends BaseService<Pedido> {

  constructor(injector: Injector) {
    super(injector, 'pedidos');
  }

  carregarPedidosPorPerfil(perfil: string): Observable<Pedido[]> {
    return super.get({ perfil });
  }
}
