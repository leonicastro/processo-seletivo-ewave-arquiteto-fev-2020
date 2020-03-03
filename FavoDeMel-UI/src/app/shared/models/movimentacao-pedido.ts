import { SituacaoPedido } from '../enums/situacao-pedido.enum';

export interface MovimentacaoPedido {
  acao: string;
  situacao: SituacaoPedido;
}