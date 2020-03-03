
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;

namespace FavoDeMel.Infrastructure.MongoDB.Repositories
{
    public class ComandasRepository : BaseRepository<Comanda>, IComandasRepository
    {
        public ComandasRepository(IMongoContext context) : base(context)
        {
        }
    }
}