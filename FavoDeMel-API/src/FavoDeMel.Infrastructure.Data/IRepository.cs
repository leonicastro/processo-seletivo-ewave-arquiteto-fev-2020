using System;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.Data
{
    public interface IRepository<TEntity> : IDisposable where TEntity : class
    {
        Task<TEntity> Add(TEntity obj);
        Task<TEntity> Update(TEntity obj);
        Task Remove(Guid id);
    }
}
