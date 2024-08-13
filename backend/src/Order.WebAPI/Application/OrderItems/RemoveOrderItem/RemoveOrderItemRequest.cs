using MediatR;

namespace OrderService.WebAPI.Application.OrderItems.RemoveOrderItem
{
    public class RemoveOrderItemRequest : IRequest<RemoveOrderItemResponse>
    {
        public int OrderItemId { get; set; }
    }
}
