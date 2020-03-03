using FavoDeMel.Domain.Entities;
using FavoDeMel.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FavoDeMel.Domain.Finders
{
    public interface IComandasFinder : IFinder<Comanda>
    {
        Task<IEnumerable<Comanda>> ObterComandasAbertasPorGarcom(Guid garcomId);
    }
}
