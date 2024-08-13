using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Products.RemoveProduct
{
    [ExcludeFromCodeCoverage]
    public sealed class RemoveProductRequest : IRequest<RemoveProductResponse>
    {
        public int ProductId { get; set; }

    }
}
