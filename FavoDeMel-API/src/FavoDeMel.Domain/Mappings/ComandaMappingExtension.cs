using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Entities.Dtos;

namespace FavoDeMel.Domain.Mappings
{
    public static class ComandaMappingExtension
    {
        public static Comanda ToEntity(this ComandaDto dto) => new Comanda
        {
            Id = dto.Id,
            GarcomId = dto.GarcomId,
            NumeroMesa = dto.NumeroMesa,
            Pedidos = dto.Pedidos.ToEntity(),
            Situacao = (int)dto.Situacao,
            DataCricao = dto.DataCricao,
            DataUltimaAlteracao = dto.DataUltimaAlteracao
        };
    }
}
