
using System;
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Interfaces;
using FavoDeMel.Domain.Mappings;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Infrastructure.Notifyer;
using System.Threading.Tasks;
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Enums;

namespace FavoDeMel.Domain.Services
{
    public class ComandasService : IComandasService
    {
        private readonly IComandasRepository _repository;
        private readonly INotifyerService _notifyerService;
        public ComandasService(
            IComandasRepository repository,
            INotifyerService notifyerService
            )
        {
            _repository = repository;
            _notifyerService = notifyerService;
        }

        public async Task<Comanda> CriarComanda(ComandaDto dto)
        {
            if (dto.Id == Guid.Empty) throw new ArgumentNullException(nameof(dto.Id));
            if (dto.GarcomId == Guid.Empty) throw new ArgumentNullException(nameof(dto.GarcomId));
            if (dto.NumeroMesa <= 0) throw new ArgumentOutOfRangeException(nameof(dto.NumeroMesa));
            if (dto.Situacao != EnumSituacaoComanda.Aberta) throw new ArgumentOutOfRangeException(nameof(dto.Situacao));

            var result = await _repository.Add(dto.ToEntity());
            await _notifyerService.Notify("ComandaCriada", dto);

            return result;
        }
    }
}
