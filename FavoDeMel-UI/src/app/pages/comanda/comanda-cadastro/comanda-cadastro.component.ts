import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../store/actions';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-comanda-cadastro',
  templateUrl: './comanda-cadastro.component.html',
  styleUrls: ['./comanda-cadastro.component.scss']
})
export class ComandaCadastroComponent {
  form: FormGroup;

  constructor(
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.montarForm();
  }

  submit() {
    const model = this.form.getRawValue();
    this.store.dispatch(actions.abrirComanda({ comanda: model }))
  }

  private montarForm() {
    this.form = this.fb.group({
      numeroMesa: [],
    });
  }
}
