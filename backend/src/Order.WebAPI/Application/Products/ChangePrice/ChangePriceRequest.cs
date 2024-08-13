using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Products.ChangePrice
{
    [ExcludeFromCodeCoverage]
    public sealed class ChangePriceRequest : IRequest<ChangePriceResponse>
    {
        public int ProductId { get; set; }

        public decimal Price { get; set; }
    }
}
