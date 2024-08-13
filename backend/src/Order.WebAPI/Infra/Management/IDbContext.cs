using Microsoft.EntityFrameworkCore;

namespace OrderService.WebAPI.Infra.Management
{
    public interface IDbContext : IDisposable
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

        DbSet<TEntity> Set<TEntity>()
            where TEntity : class;
    }
}