using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FavoDeMel.Web.Api.Controllers
{
    [Route("pedidos")]
    public class PedidosController : Controller
    {
        private readonly IPedidosFinder _finder;
        private readonly IPedidosService _pedidosService;

        public PedidosController(IPedidosFinder finder, IPedidosService pedidosService)
        {
            _finder = finder;
            _pedidosService = pedidosService;
        }

        /// <summary>
        /// Retorna a lista de pedidos nas situações referentes a cada perfil.
        /// </summary>
        /// <param name="perfil"></param>
        /// <returns></returns>
        [HttpGet("")]
        public async Task<IActionResult> GetPedidosPorPerfil([FromQuery] string perfil)
        {
            var result = await _finder.ObterPedidosPorPerfil(perfil);
            return Ok(result);
        }

        [HttpGet("{pedidoId:guid}")]
        public async Task<IActionResult> Get(Guid pedidoId)
        {
            var result = await _finder.GetById(pedidoId);
            return Ok(result);
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]PedidoDto dto)
        {
            dto.Id = Guid.NewGuid();
            dto.Situacao = EnumSituacaoPedido.AguardandoRecebimento;

            await _pedidosService.CriarPedido(dto);

            return Ok(dto);
        }

        [HttpPut("{pedidoId:guid}/movimentar")]
        public async Task<IActionResult> Put(Guid pedidoId, [FromBody] PedidoDto pedido)
        {
            var pedidoAtualizado = await _pedidosService.MovimentarPedido(pedidoId, pedido.Situacao);
            return Ok(pedidoAtualizado);
        }

    }
}