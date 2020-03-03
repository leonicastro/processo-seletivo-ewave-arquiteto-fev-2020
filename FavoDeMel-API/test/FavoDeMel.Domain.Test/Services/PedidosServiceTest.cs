using System;
using System.Threading.Tasks;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Services;
using FavoDeMel.Domain.Test.Mocks;
using FavoDeMel.Domain.Test.Mocks.Finders;
using FavoDeMel.Domain.Test.Mocks.Repositories;
using FavoDeMel.Domain.Test.Mocks.Services;
using FluentAssertions;
using Xunit;

namespace FavoDeMel.Domain.Test.Services
{
    public class PedidosServiceTest
    {
        private readonly MockPedido mockPedido = new MockPedido();
        private readonly PedidosService service;

        public PedidosServiceTest()
        {
            service = new PedidosService(
                new MockPedidosRepository().Setup(),
                new MockPedidosFinder().Setup(),
                new MockNotifyerService().Setup()
            );
        }

        [Fact]
        public void Ao_movimentar_pedido_deve_conter_um_id_valido()
        {
            var act = new Action(() => { Task.WaitAll(service.MovimentarPedido(Guid.Empty, EnumSituacaoPedido.Recebido)); });
            act.ShouldThrow<ArgumentNullException>().And.ParamName.Should().Be("id");
        }

        [Fact]
        public void Ao_movimentar_pedido_situacao_deve_ser_valida()
        {
            var act = new Action(() => { Task.WaitAll(service.MovimentarPedido(Guid.NewGuid(), 0)); });
            act.ShouldThrow<ArgumentOutOfRangeException>().And.ParamName.Should().Be("situacao");
        }
    }
}
