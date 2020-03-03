using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.MongoDB.Finders
{
    public class ComandasFinder : BaseFinder<Comanda>, IComandasFinder
    {
        private readonly IMongoCollection<Pedido> _pedidoDbSet;
        private readonly IPedidosFinder _pedidoFinder;

        public ComandasFinder(IMongoContext context, IPedidosFinder pedidoFinder) : base(context)
        {
            _pedidoDbSet = Context.GetCollection<Pedido>("Pedido");
            _pedidoFinder = pedidoFinder;
        }

        public async Task<IEnumerable<Comanda>> ObterComandasAbertasPorGarcom(Guid garcomId)
        {

            var filters = Builders<Comanda>.Filter
                   .Where(x => x.GarcomId == garcomId);

            var comandas = await (await DbSet.FindAsync(filters)).ToListAsync();

            foreach (var comanda in comandas)
            {
                comanda.Pedidos = await _pedidoFinder.ObterPorComandaId(comanda.Id);
            }

            return comandas;
        }

        public override async Task<Comanda> GetById(Guid comandaId)
        {
            var comanda = await base.GetById(comandaId);
            comanda.Pedidos = await _pedidoFinder.ObterPorComandaId(comanda.Id);
            return comanda;
        }

    }
}
