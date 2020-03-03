using FavoDeMel.Domain.Enums;
using System;
using System.Collections.Generic;

namespace FavoDeMel.Domain.Entities.Dtos
{
    public class ComandaDto
    {
        public Guid Id { get; set; }
        public int NumeroMesa { get; set; }
        public Guid GarcomId { get; set; }
        public EnumSituacaoComanda Situacao { get; set; }
        public IEnumerable<PedidoDto> Pedidos { get; set; }
        public DateTime DataCricao { get; set; }
        public DateTime DataUltimaAlteracao { get; set; }
    }
}
