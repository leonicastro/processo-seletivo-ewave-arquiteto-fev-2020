using System;
using System.Collections.Generic;
using System.Text;
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Enums;

namespace FavoDeMel.Domain.Test.Mocks
{
    public class MockPedido
    {
        private readonly DateTime dateTimeNow;

        public MockPedido()
        {
            dateTimeNow = DateTime.Now;
        }

        public Pedido Criado()
        {
            return new Pedido
            {
                Id = Guid.NewGuid(),
                Nome = "Pedido nome",
                ComandaId = Guid.NewGuid(),
                Observacao = "Observação do pedido",
                Quantidade = 2,
                Situacao = EnumSituacaoPedido.AguardandoRecebimento,
                DataCricao = dateTimeNow,
                DataUltimaAlteracao = dateTimeNow
            };
        }
    }
}
