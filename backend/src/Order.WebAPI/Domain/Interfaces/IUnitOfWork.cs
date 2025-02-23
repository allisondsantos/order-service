﻿namespace OrderService.WebAPI.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> GetRepository<TEntity>() where TEntity : class;

        Task<int> CommitAsync(CancellationToken cancellationToken);
    }
}
