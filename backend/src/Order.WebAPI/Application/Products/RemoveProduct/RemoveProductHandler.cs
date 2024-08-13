using MediatR;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Products.RemoveProduct
{
    public sealed class RemoveProductHandler(IUnitOfWork unitOfWork) : IRequestHandler<RemoveProductRequest, RemoveProductResponse>
    {
        public async Task<RemoveProductResponse> Handle(RemoveProductRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Product>();

            var product = repository.FindBy(x => x.Id == request.ProductId)
                .Include(x => x.OrderItems)
                .FirstOrDefault();
            RecordNotFoundException.ThowIfNull(product);

            if (product.OrderItems.Count > 0)
            {
                throw new Exception("The product has been added to an order.");
            }

            repository.Delete(product);
            await unitOfWork.CommitAsync(cancellationToken);

            return new RemoveProductResponse
            {
                Removed = true,
            };
        }
    }
}
