
using FavoDeMel.Infrastructure.Data;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.MongoDB.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        protected readonly IMongoContext Context;
        protected readonly IMongoCollection<TEntity> DbSet;

        protected BaseRepository(IMongoContext context)
        {
            Context = context;
            DbSet = Context.GetCollection<TEntity>(typeof(TEntity).Name);
        }

        public async Task<TEntity> Add(TEntity obj)
        {
            obj.DataCricao = DateTime.Now;
            obj.DataUltimaAlteracao = DateTime.Now;
            await DbSet.InsertOneAsync(obj);
            return obj;
        }

        public async Task<TEntity> Update(TEntity obj)
        {
            obj.DataUltimaAlteracao = DateTime.Now;
            await DbSet.ReplaceOneAsync(p => p.Id == obj.Id, obj);
            return obj;

        }

        public async Task Remove(Guid id)
        {
            await DbSet.FindOneAndDeleteAsync(p => p.Id == id);
        }

        public void Dispose()
        {
            Context?.Dispose();
        }
    }
}
