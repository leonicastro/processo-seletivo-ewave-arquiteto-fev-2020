using System;
using System.Collections.Generic;
using System.Text;

namespace FavoDeMel.Domain.Enums
{
    public enum EnumSituacaoPedido
    {
        AguardandoRecebimento = 1,
        Recebido = 2,
        Pronto = 3,
        Entregue = 4,
        Recusado = 5,
        Cancelado = 6
    }
}
