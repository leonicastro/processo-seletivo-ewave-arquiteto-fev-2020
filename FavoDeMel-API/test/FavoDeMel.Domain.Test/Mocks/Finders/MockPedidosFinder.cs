using System;
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Finders;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Test.Mocks.Finders
{
    public class MockPedidosFinder
    {

        public IPedidosFinder Setup()
        {
            var finder = new Mock<IPedidosFinder>();

            finder
                .Setup(e => e.GetById(It.IsAny<Guid>()))
                .Returns((Pedido pedido) => Task.FromResult(pedido));

            return finder.Object;
        }
    }

}
