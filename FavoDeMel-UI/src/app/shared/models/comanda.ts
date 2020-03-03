import { SituacaoComanda } from '../enums/situacao-comanda.enum';
import { Pedido } from './pedido';

export interface Comanda {
  id: string,
  situacao: SituacaoComanda
  pedidos: Pedido[],
  numeroMesa: number,
  garcomId: string,
}