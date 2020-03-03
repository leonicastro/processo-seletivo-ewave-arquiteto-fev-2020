import { Injectable, Injector } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Comanda } from '../models/comanda';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ComandasService extends BaseService<Comanda> {
  constructor(injector: Injector) {
    super(injector, 'comandas');
  }

  carregarListaComandas(garcomId: string): Observable<Comanda[]> {
    return super.get({ garcomId });
  }

  abrirComanda(model: Comanda): Observable<Comanda> {
    return super.post(model);
  }

  fecharComanda(comandaId: string): Observable<boolean> {
    return of(true);
  }

  obterComandaPorId(comandaId: string): Observable<Comanda> {
    return super.getById(comandaId);
  }
}
