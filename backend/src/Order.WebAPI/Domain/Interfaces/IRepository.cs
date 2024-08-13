using System.Linq.Expressions;

namespace OrderService.WebAPI.Domain.Interfaces
{
    public interface IRepository<TEntity>
    {
        void Add(TEntity entity);

        void Delete(TEntity entity);

        IQueryable<TEntity> FindBy(Expression<Func<TEntity, bool>> predicate);

        IQueryable<TEntity> GetAll();

        TEntity? GetById(int id);

        void Update(TEntity entity);
    }
}
