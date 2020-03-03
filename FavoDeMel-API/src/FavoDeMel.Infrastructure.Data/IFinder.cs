using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.Data
{
    public interface IFinder<TEntity> : IDisposable where TEntity : class
    {
        Task<TEntity> GetById(Guid id);
        Task<IEnumerable<TEntity>> GetAll();
    }
}
