
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Entities.Dtos;
using System.Collections.Generic;
using System.Linq;

namespace FavoDeMel.Domain.Mappings
{
    public static class PedidoMappingExtensions
    {
        public static Pedido ToEntity(this PedidoDto dto) =>
            new Pedido
            {
                Id = dto.Id,
                Nome = dto.Nome,
                ComandaId = dto.ComandaId,
                Observacao = dto.Observacao,
                Quantidade = dto.Quantidade,
                Situacao = dto.Situacao,
                DataCricao = dto.DataCricao,
                DataUltimaAlteracao = dto.DataUltimaAlteracao
            };


        public static IEnumerable<Pedido> ToEntity(this IEnumerable<PedidoDto> dtos)
        {
            if (dtos != null && dtos.Count() > 0)
            {
                foreach (var pedidoDto in dtos)
                {
                    yield return pedidoDto.ToEntity();
                }
            }
        }
    }
}
