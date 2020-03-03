using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Services;
using FavoDeMel.Domain.Test.Mocks;
using FavoDeMel.Domain.Test.Mocks.Repositories;
using FavoDeMel.Domain.Test.Mocks.Services;
using FluentAssertions;
using System;
using System.Threading.Tasks;
using Xunit;

namespace FavoDeMel.Domain.Test.Services
{
    public class ComandasServiceTest
    {
        private readonly MockComanda mockComanda = new MockComanda();
        private readonly ComandasService service;

        private ComandaDto parametroDeEntrada;

        public ComandasServiceTest()
        {
            service = new ComandasService(
                new MockComandasRepository().Setup(),
                new MockNotifyerService().Setup()
            );

            parametroDeEntrada = new ComandaDto
            {
                Id = mockComanda.Criada().Id,
                GarcomId = mockComanda.Criada().GarcomId,
                NumeroMesa = mockComanda.Criada().NumeroMesa,
                Situacao = EnumSituacaoComanda.Aberta
            };
        }


        [Fact]
        public void Deve_criar_uma_comanda()
        {
            var resultado = service.CriarComanda(parametroDeEntrada).GetAwaiter().GetResult();
            resultado.Should().BeOfType<Comanda>();

        }

        [Fact]
        public void Ao_criar_comanda_id_nao_pode_ser_vazio()
        {
            parametroDeEntrada.Id = Guid.Empty;

            var act = new Action(() => { Task.WaitAll(service.CriarComanda(parametroDeEntrada)); });

            act.ShouldThrow<ArgumentNullException>("O paramêtro id não pode ser vazio").And.ParamName.Should().Be("Id"); ;
        }

        [Fact]
        public void Ao_criar_comanda_garcomID_nao_pode_ser_vazio()
        {
            parametroDeEntrada.GarcomId = Guid.Empty;

            var act = new Action(() => { Task.WaitAll(service.CriarComanda(parametroDeEntrada)); });

            act.ShouldThrow<ArgumentNullException>("O parametro garcomId não pode ser vazio").And.ParamName.Should().Be("GarcomId"); ;
        }

        [Theory]
        [InlineData(-1)]
        [InlineData(0)]
        public void Ao_criar_comanda_numero_mesa_deve_ser_maior_que_zero(int numeroMesa)
        {
            parametroDeEntrada.NumeroMesa = numeroMesa;

            var act = new Action(() => { Task.WaitAll(service.CriarComanda(parametroDeEntrada)); });

            act.ShouldThrow<ArgumentOutOfRangeException>("O parametro numeroMesa deve ser maior que zero").And.ParamName.Should().Be("NumeroMesa"); ;
        }

        [Fact]
        public void Ao_criar_comanda_situacao_deve_ser_aberta()
        {
            parametroDeEntrada.Situacao = EnumSituacaoComanda.Fechada;

            var act = new Action(() => { Task.WaitAll(service.CriarComanda(parametroDeEntrada)); });

            act.ShouldThrow<ArgumentOutOfRangeException>("O parametro Situacao deve ser Aberta (1)").And.ParamName.Should().Be("Situacao");
        }

    }
}
