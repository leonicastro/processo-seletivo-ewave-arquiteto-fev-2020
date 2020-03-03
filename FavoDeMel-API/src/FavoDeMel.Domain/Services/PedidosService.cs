using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Domain.Interfaces;
using FavoDeMel.Domain.Mappings;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Infrastructure.Notifyer;
using System;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Services
{
    public class PedidosService : IPedidosService
    {
        private readonly IPedidosRepository _repository;
        private readonly IPedidosFinder _finder;
        private readonly INotifyerService _notifyerService;
        public PedidosService(
            IPedidosRepository repository,
            IPedidosFinder finder,
            INotifyerService notifyerService
            )
        {
            _repository = repository;
            _finder = finder;
            _notifyerService = notifyerService;
        }
        public async Task CriarPedido(PedidoDto dto)
        {
            await _repository.Add(dto.ToEntity());
            await _notifyerService.Notify("PedidoCriado", dto);
        }

        public async Task<Pedido> MovimentarPedido(Guid id, EnumSituacaoPedido situacao)
        {
            if (id == Guid.Empty) throw new ArgumentNullException(nameof(id));
            if (situacao == 0) throw new ArgumentOutOfRangeException(nameof(situacao));

            var pedido = await _finder.GetById(id);
            pedido.Situacao = situacao;

            var pedidoAtualizado = await _repository.Update(pedido);
            await _notifyerService.Notify("MovimentacaoPedido", pedido);

            return pedidoAtualizado;
        }
    }
}
