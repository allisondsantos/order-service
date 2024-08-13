using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Interfaces;
using System.Linq.Expressions;

namespace OrderService.WebAPI.Infra.Management
{
    public sealed class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly DbSet<TEntity> _dbSet;

        public Repository(IDbContext context)
        {
            _dbSet = context.Set<TEntity>();
        }

        public void Add(TEntity entity)
        {
            _ = _dbSet.Add(entity);
        }

        public void Delete(TEntity entity)
        {
            _ = _dbSet.Remove(entity);
        }

        public IQueryable<TEntity> FindBy(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbSet.Where(predicate);
        }

        public IQueryable<TEntity> GetAll()
        {
            return _dbSet.AsQueryable();
        }

        public TEntity? GetById(int id)
        {
            return _dbSet.Find(id);
        }

        public void Update(TEntity entity)
        {
            _ = _dbSet.Update(entity);
        }
    }
}
