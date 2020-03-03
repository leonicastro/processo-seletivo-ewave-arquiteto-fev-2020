
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Enums;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FavoDeMel.Web.Api.Controllers
{
    [Route("comandas")]
    public class ComandasController : ControllerBase
    {
        private readonly IComandasFinder _finder;
        private readonly IComandasService _comandasService;

        public ComandasController(IComandasFinder finder, IComandasService comandasService)
        {
            _finder = finder;
            _comandasService = comandasService;
        }


        [HttpGet("")]
        public async Task<IActionResult> GetComandasPorGarcom([FromQuery] Guid garcomId)
        {
            var result = await _finder.ObterComandasAbertasPorGarcom(garcomId);
            return Ok(result);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var result = await _finder.GetById(id);
            return Ok(result);
        }


        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]ComandaDto dto)
        {
            dto.Id = Guid.NewGuid();
            dto.Situacao = EnumSituacaoComanda.Aberta;

            await _comandasService.CriarComanda(dto);

            return Ok(dto);
        }
    }
}