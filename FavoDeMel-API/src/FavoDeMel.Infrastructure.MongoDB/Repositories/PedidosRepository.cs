using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;

namespace FavoDeMel.Infrastructure.MongoDB.Repositories
{
    public class PedidosRepository : BaseRepository<Pedido>, IPedidosRepository
    {
        public PedidosRepository(IMongoContext context) : base(context)
        {
        }
    }
}
