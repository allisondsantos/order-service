using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Interfaces;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.Application.Products.CreateProduct
{
    public sealed class CreateProductHandler(IUnitOfWork unitOfWork) : IRequestHandler<CreateProductRequest, CreateProductResponse>
    {
        public async Task<CreateProductResponse> Handle(CreateProductRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Product>();

            var product = new Product(new NewProductModel
            {
                Name = request.Name,
                Price = request.Price,
            });
            repository.Add(product);

            await unitOfWork.CommitAsync(cancellationToken);

            return new CreateProductResponse
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
            };
        }
    }
}
