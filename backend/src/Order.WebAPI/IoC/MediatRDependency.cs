using MediatR;
using OrderService.WebAPI.Behavior;
using OrderService.WebAPI.Infra;

namespace OrderService.WebAPI.IoC
{
    public static class MediatRDependency
    {

        public static IServiceCollection ConfigureMediatR(this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(typeof(ApplicationContext).Assembly));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(UnhandledExceptionBehavior<,>));

            return services;
        }
    }
}
