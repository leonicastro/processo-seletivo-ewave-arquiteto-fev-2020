using System;
using FavoDeMel.Infrastructure.CrossCutting.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace FavoDeMel.Web.Api.Configurations
{
    public static class DependencyInjectionSetup
    {
        public static void AddDependencyInjectionSetup(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            NativeInjector.RegisterServices(services);
        }
    }
}
