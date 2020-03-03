import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Comanda } from '../../../shared/models/comanda';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';


@Component({
  selector: 'app-comanda-consulta',
  templateUrl: './comanda-consulta.component.html',
  styleUrls: ['./comanda-consulta.component.scss']
})
export class ComandasConsultaComponent {
  pesquisa = new FormControl();

  comandasAbertas$: Observable<Comanda[]>;

  constructor(private store: Store<any>) {
    this.store.dispatch(actions.carregarListaComandas());
    this.comandasAbertas$ = store.pipe(select(selectors.selectComandasAbertas));

    this.pesquisa.valueChanges
      .pipe(
        debounceTime(300),
        map(value => (+value))
      )
      .subscribe((numeroMesa) => {
        this.store.dispatch(actions.filtrarComandaPorNumeroDaMesa({ numeroMesa }));
      });
  }

  limparCampoDePesquisa() {
    this.pesquisa.setValue('');
  }
}
