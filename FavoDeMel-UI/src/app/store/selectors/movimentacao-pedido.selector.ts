import { createSelector } from '@ngrx/store';
import { SituacaoPedido } from '../../shared/enums/situacao-pedido.enum';

export const selectMovimentacaoPedido = (state) => (state.movimentacaoPedido);

export const selectPerfilSelecionado = createSelector(selectMovimentacaoPedido, (state) => state.perfil);

export const selectAcoesMovimentacao = createSelector(
  selectMovimentacaoPedido,
  (state) => (state.pedidos),
  ({ acoes, perfil }, { pedidoSelecionado }) => {


    if (perfil === 'cozinha') {

      switch (pedidoSelecionado.situacao) {
        case SituacaoPedido.AguardandoRecebimento: {

          acoes = [
            {
              acaoDescricao: 'Receber pedido',
              acaoSituacao: SituacaoPedido.Recebido,
              style: 'primary',
              icone: 'done'
            },
            {
              acaoDescricao: 'Recusar pedido',
              acaoSituacao: SituacaoPedido.Recusado,
              style: 'warn',
              icone: 'clear'
            }
          ];
          break;
        };
        case SituacaoPedido.Recebido: {
          acoes = [
            {
              acaoDescricao: 'Pedido pronto',
              acaoSituacao: SituacaoPedido.Pronto,
              style: 'primary'
            }
          ];
          break;
        }
      }
    } else if (perfil === 'garcom') {

      switch (pedidoSelecionado.situacao) {
        case SituacaoPedido.Pronto: {
          acoes = [
            {
              acaoDescricao: 'Pedido entregue ao cliente',
              acaoSituacao: SituacaoPedido.Entregue,
              style: 'primary'
            }
          ];
          break;
        }
      }
    }

    return acoes;
  });