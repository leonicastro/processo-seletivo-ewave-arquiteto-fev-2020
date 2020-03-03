using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Finders
{
    public interface IPedidosFinder : IFinder<Pedido>
    {
        Task<IEnumerable<Pedido>> ObterPedidosPorPerfil(string perfil);
        Task<IEnumerable<Pedido>> ObterPorComandaId(Guid comandaId);
    }
}
