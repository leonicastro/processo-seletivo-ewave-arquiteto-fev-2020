import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { PedidoRoutingModule } from "./pedido-routing.module";
import { PedidoConsultaComponent } from "./pedido-consulta/pedido-consulta.component";
import { PedidoCadastroComponent } from "./pedido-cadastro/pedido-cadastro.component";
import { PedidoDetalhesComponent } from "./pedido-detalhes/pedido-detalhes.component";

@NgModule({
  declarations: [
    PedidoConsultaComponent,
    PedidoCadastroComponent,
    PedidoDetalhesComponent
  ],
  imports: [SharedModule, PedidoRoutingModule],
  exports: [SharedModule]
})
export class PedidoModule {}
