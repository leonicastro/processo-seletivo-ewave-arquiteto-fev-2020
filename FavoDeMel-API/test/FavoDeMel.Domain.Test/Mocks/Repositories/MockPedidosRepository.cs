using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Repositories;
using Moq;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Test.Mocks.Repositories
{
    public class MockPedidosRepository
    {
        public IPedidosRepository Setup()
        {
            var repository = new Mock<IPedidosRepository>();

            repository
                .Setup(e => e.Add(It.IsAny<Pedido>()))
                .Returns((Pedido pedido) => Task.FromResult(pedido));

            return repository.Object;
        }
    }
}
