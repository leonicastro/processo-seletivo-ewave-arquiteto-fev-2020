
using FavoDeMel.Domain.Entities.Dtos;
using FavoDeMel.Domain.Finders;
using FavoDeMel.Domain.Interfaces;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Domain.Services;
using FavoDeMel.Domain.Validations;
using FavoDeMel.Infrastructure.MongoDB.Context;
using FavoDeMel.Infrastructure.MongoDB.Finders;
using FavoDeMel.Infrastructure.MongoDB.Interfaces;
using FavoDeMel.Infrastructure.MongoDB.Repositories;
using FavoDeMel.Infrastructure.Notifyer;
using FluentValidation;

using Microsoft.Extensions.DependencyInjection;

namespace FavoDeMel.Infrastructure.CrossCutting.IoC
{
    public class NativeInjector
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IMongoContext, MongoContext>();
            services.AddScoped<INotifyerService, NotifyerService>();

            services.AddScoped<IComandasRepository, ComandasRepository>();
            services.AddScoped<IComandasFinder, ComandasFinder>();
            services.AddScoped<IComandasService, ComandasService>();

            services.AddScoped<IPedidosRepository, PedidosRepository>();
            services.AddScoped<IPedidosFinder, PedidosFinder>();
            services.AddScoped<IPedidosService, PedidosService>();

            services.AddScoped<IValidator<ComandaDto>, ComandaValidator>();

        }
    }
}
