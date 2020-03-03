using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Enums;
using System;

namespace FavoDeMel.Domain.Test.Mocks
{
    public class MockComanda
    {
        private readonly DateTime dateTimeNow;

        public MockComanda()
        {
            dateTimeNow = DateTime.Now;
        }

        public Comanda Criada()
        {
            return new Comanda
            {
                Id = Guid.NewGuid(),
                GarcomId = Guid.NewGuid(),
                NumeroMesa = 4,
                Situacao = (int)EnumSituacaoComanda.Aberta,
                DataCricao = dateTimeNow,
                DataUltimaAlteracao = dateTimeNow
            };
        }
    }
}
