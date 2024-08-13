using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Products.CreateProduct
{
    [ExcludeFromCodeCoverage]
    public sealed class CreateProductRequest : IRequest<CreateProductResponse>
    {
        public string Name { get; set; } = default!;

        public decimal Price { get; set; }
    }
}
