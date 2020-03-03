import { SituacaoPedido } from '../enums/situacao-pedido.enum';

export interface Pedido {
  id: string;
  nome: string;
  comandaId: string;
  observacao: string;
  quantidade: number;
  situacao: SituacaoPedido;
  dataCriacao: Date;
  dataUltimaAlteracao: Date;
}