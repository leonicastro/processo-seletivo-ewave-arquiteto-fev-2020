
using FavoDeMel.Infrastructure.Data;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace FavoDeMel.Domain.Entities
{
    public class Comanda : Entity
    {
        public int NumeroMesa { get; set; }
        public Guid GarcomId { get; set; }
        public int Situacao { get; set; }
        public IEnumerable<Pedido> Pedidos { get; set; }
    }
}
