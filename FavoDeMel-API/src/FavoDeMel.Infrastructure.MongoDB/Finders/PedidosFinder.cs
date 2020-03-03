using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.MongoDB.Finders
{
    public class PedidosFinder : BaseFinder<Pedido>, IPedidosFinder
    {
        public PedidosFinder(IMongoContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Pedido>> ObterPedidosPorPerfil(string perfil)
        {
            var builder = Builders<Pedido>.Filter;

            var filters = builder.Where(x =>
                x.Situacao == EnumSituacaoPedido.AguardandoRecebimento ||
                x.Situacao == EnumSituacaoPedido.Recebido
            );

            var sort = Builders<Pedido>.Sort.Descending("DataUltimaAlteracao");

            var data = await DbSet.FindAsync(filters, new FindOptions<Pedido, Pedido> { Sort = sort });

            return await data.ToListAsync();
        }

        public async Task<IEnumerable<Pedido>> ObterPorComandaId(Guid comandaId)
        {
            var filters = Builders<Pedido>.Filter
                .Where(x => x.ComandaId == comandaId);

            var data = await DbSet.FindAsync(filters);

            return await data.ToListAsync();
        }
    }
}
