using FavoDeMel.Infrastructure.Data;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.MongoDB.Finders
{
    public abstract class BaseFinder<TEntity> : IFinder<TEntity> where TEntity : Entity
    {
        protected readonly IMongoContext Context;
        protected readonly IMongoCollection<TEntity> DbSet;

        protected BaseFinder(IMongoContext context)
        {
            Context = context;
            DbSet = Context.GetCollection<TEntity>(typeof(TEntity).Name);
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            var data = await DbSet.FindAsync(Builders<TEntity>.Filter.Empty);
            return await data.ToListAsync();
        }

        public virtual async Task<TEntity> GetById(Guid id)
        {
            var data = await DbSet.FindAsync(Builders<TEntity>.Filter.Eq(x => x.Id, id));
            return data.SingleOrDefault();
        }

        public void Dispose()
        {
            Context?.Dispose();
        }
    }
}
