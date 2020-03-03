import { Pipe, PipeTransform } from '@angular/core';
import { SituacaoPedido } from '../enums/situacao-pedido.enum';

@Pipe({
  name: 'situacaoPedido'
})
export class SituacaoPedidoPipe implements PipeTransform {

  transform(value: SituacaoPedido, ...args: unknown[]): string {
    switch (value) {
      case SituacaoPedido.AguardandoRecebimento: {
        return 'Aguardando recebimento';
      };
      case SituacaoPedido.Recebido: {
        return 'Recebido';
      };
      case SituacaoPedido.Pronto: {
        return 'Pronto';
      };
      case SituacaoPedido.Entregue: {
        return 'Entregue';
      };
      case SituacaoPedido.Cancelado: {
        return 'Cancelado';
      };
      case SituacaoPedido.Recusado: {
        return 'Recusado';
      };
    }

    return '';
  }

}
