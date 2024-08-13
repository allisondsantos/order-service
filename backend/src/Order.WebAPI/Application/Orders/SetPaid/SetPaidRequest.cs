using MediatR;

namespace OrderService.WebAPI.Application.Orders.SetPaid
{
    public class SetPaidRequest : IRequest<SetPaidResponse>
    {
        public int OrderId { get; set; }
    }
}
