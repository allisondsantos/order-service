using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Products.ChangeName
{
    public sealed class ChangeNameHandler(IUnitOfWork unitOfWork) : IRequestHandler<ChangeNameRequest, ChangeNameResponse>
    {
        public async Task<ChangeNameResponse> Handle(ChangeNameRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Product>();

            var product = repository.GetById(request.ProductId);
            RecordNotFoundException.ThowIfNull(product);

            product.ChangeName(request.Name);

            await unitOfWork.CommitAsync(cancellationToken);

            return new ChangeNameResponse
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
            };
        }
    }
}
