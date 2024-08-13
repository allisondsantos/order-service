using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Products.ChangePrice
{
    public sealed class ChangePriceHandler(IUnitOfWork unitOfWork) : IRequestHandler<ChangePriceRequest, ChangePriceResponse>
    {
        public async Task<ChangePriceResponse> Handle(ChangePriceRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Product>();

            var product = repository.GetById(request.ProductId);
            RecordNotFoundException.ThowIfNull(product);

            product.ChangePrice(request.Price);

            await unitOfWork.CommitAsync(cancellationToken);

            return new ChangePriceResponse
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
            };
        }
    }
}
