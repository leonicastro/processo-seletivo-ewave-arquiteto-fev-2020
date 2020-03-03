using MongoDB.Driver;
using System;

namespace FavoDeMel.Infrastructure.MongoDB.Interfaces
{
    public interface IMongoContext : IDisposable
    {
        IMongoCollection<T> GetCollection<T>(string name);
    }
}
