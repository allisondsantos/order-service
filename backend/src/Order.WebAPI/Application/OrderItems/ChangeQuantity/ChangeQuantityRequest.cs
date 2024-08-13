using MediatR;

namespace OrderService.WebAPI.Application.OrderItems.ChangeQuantity
{
    public class ChangeQuantityRequest : IRequest<ChangeQuantityResponse>
    {
        public int OrderItemId { get; set; }

        public int Quantity { get; set; }
    }
}
