using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Infra.Management
{
    public sealed class UnitOfWork(IDbContext dbContext) : IUnitOfWork
    {
        private Dictionary<Type, object> _repositories = default!;

        async Task<int> IUnitOfWork.CommitAsync(CancellationToken cancellationToken)
        {
            int totalChanges = 0;
            if (dbContext is not null)
            {
                totalChanges += await dbContext.SaveChangesAsync(cancellationToken);
            }

            return totalChanges;
        }

        void IDisposable.Dispose()
        {
            dbContext?.Dispose();

            GC.SuppressFinalize(obj: this);
        }

        IRepository<TEntity> IUnitOfWork.GetRepository<TEntity>()
        {
            _repositories ??= new Dictionary<Type, object>();

            var type = typeof(TEntity);
            if (!_repositories.ContainsKey(type))
            {
                _repositories[type] = new Repository<TEntity>(dbContext);
            }

            return (IRepository<TEntity>)this._repositories[type];
        }
    }
}
