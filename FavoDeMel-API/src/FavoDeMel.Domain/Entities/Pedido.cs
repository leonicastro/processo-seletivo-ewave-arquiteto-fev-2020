
using FavoDeMel.Domain.Enums;
using FavoDeMel.Infrastructure.Data;
using System;

namespace FavoDeMel.Domain.Entities
{
    public class Pedido : Entity
    {
        public string Nome { get; set; }
        public Guid ComandaId { get; set; }
        public int Quantidade { get; set; }
        public string Observacao { get; set; }
        public EnumSituacaoPedido Situacao { get; set; }
    }
}
