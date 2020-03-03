using System;

namespace FavoDeMel.Infrastructure.Data
{
    public abstract class Entity
    {
        public Guid Id { get; set; }
        public DateTime DataCricao { get; set; }
        public DateTime DataUltimaAlteracao { get; set; }
    }
}
