using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.OrderItems.AddOrderItem
{
    [ExcludeFromCodeCoverage]
    public sealed class AddOrderItemRequest : IRequest<AddOrderItemResponse>
    {
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}
