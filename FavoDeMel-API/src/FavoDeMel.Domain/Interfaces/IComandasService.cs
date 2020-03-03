using FavoDeMel.Domain.Entities.Dtos;
using System.Threading.Tasks;
using FavoDeMel.Domain.Entities;

namespace FavoDeMel.Domain.Interfaces
{
    public interface IComandasService
    {
        Task<Comanda> CriarComanda(ComandaDto dto);
    }
}
