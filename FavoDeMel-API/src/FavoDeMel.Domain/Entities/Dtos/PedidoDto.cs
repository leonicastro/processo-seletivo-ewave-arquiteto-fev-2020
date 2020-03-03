using FavoDeMel.Domain.Enums;
using System;

namespace FavoDeMel.Domain.Entities.Dtos
{
    public class PedidoDto
    {
        public string Nome { get; set; }
        public Guid Id { get; set; }
        public Guid ComandaId { get; set; }
        public int Quantidade { get; set; }
        public string Observacao { get; set; }
        public EnumSituacaoPedido Situacao { get; set; }
        public DateTime DataCricao { get; set; }
        public DateTime DataUltimaAlteracao { get; set; }
    }
}
