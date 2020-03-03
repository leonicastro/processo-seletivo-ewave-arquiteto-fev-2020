using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Enums;
using System;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Interfaces
{
    public interface IPedidosService
    {
        Task CriarPedido(PedidoDto dto);
        Task<Pedido> MovimentarPedido(Guid id, EnumSituacaoPedido situacao);
    }
}
