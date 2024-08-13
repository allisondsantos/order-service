using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Infra;
using OrderService.WebAPI.Infra.Management;

namespace OrderService.WebAPI.IoC
{
    public static class DatabaseDependency
    {
        public static IServiceCollection AddDatabaseContext(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationContext>(opt =>
            {
                opt.UseSqlServer(
                    configuration["ConnectionStrings:Default"],
                    sqlOpt => sqlOpt.MigrationsAssembly(typeof(ApplicationContext).Assembly.FullName));
            });

            services.AddScoped<IDbContext, ApplicationContext>();

            return services;
        }

        public static async Task<IHost> ApplyMigrationsAsync(this IHost host)
        {
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            var applicationContext = services.GetService<ApplicationContext>();
            ArgumentNullException.ThrowIfNull(applicationContext, nameof(ApplicationContext));

            await applicationContext.Database.MigrateAsync();

            return host;
        }
    }
}
