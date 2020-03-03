import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../../store/actions';

@Component({
  selector: 'app-pedido-cadastro',
  templateUrl: './pedido-cadastro.component.html',
  styleUrls: ['./pedido-cadastro.component.scss']
})
export class PedidoCadastroComponent {

  form: FormGroup;

  constructor(
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.montarForm();
  }

  submit() {
    const model = this.form.getRawValue();
    this.store.dispatch(actions.realizarPedido({ pedido: model }))
  }

  private montarForm() {
    this.form = this.fb.group({
      nome: [],
      quantidade: [],
      observacao: []
    });
  }

}
