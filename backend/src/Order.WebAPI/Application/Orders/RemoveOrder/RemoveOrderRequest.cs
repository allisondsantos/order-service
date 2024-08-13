using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.RemoveOrder
{
    [ExcludeFromCodeCoverage]
    public sealed class RemoveOrderRequest : IRequest<RemoveOrderResponse>
    {
        public int OrderId { get; set; }
    }
}
