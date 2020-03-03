using System;
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Repositories;
using Moq;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Test.Mocks.Repositories
{
    public class MockComandasRepository
    {

        public IComandasRepository Setup()
        {
            var repository = new Mock<IComandasRepository>();

            repository
                .Setup(e => e.Add(It.IsAny<Comanda>()))
                .Returns((Comanda comanda) => Task.FromResult(comanda));

            return repository.Object;
        }
    }
}
