import { NgModule } from '@angular/core';

import { ComandaRoutingModule } from './comanda-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ComandaDetalhesComponent } from './comanda-detalhes/comanda-detalhes.component';
import { ComandasConsultaComponent } from './comanda-consulta/comanda-consulta.component';
import { ComandaCadastroComponent } from './comanda-cadastro/comanda-cadastro.component';


@NgModule({
  declarations: [
    ComandaDetalhesComponent,
    ComandasConsultaComponent,
    ComandaCadastroComponent
  ],
  imports: [
    SharedModule,
    ComandaRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class ComandaModule { }
