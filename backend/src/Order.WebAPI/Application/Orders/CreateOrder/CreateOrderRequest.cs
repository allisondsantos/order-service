using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.CreateOrder
{
    [ExcludeFromCodeCoverage]
    public sealed class CreateOrderRequest : IRequest<CreateOrderResponse>
    {
        public string CustomerName { get; set; } = default!;

        public string CustomerEmail { get; set; } = default!;
    }
}
