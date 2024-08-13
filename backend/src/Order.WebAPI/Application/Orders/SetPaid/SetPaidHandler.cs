using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Orders.SetPaid
{
    public class SetPaidHandler(IUnitOfWork unitOfWork) : IRequestHandler<SetPaidRequest, SetPaidResponse>
    {
        public async Task<SetPaidResponse> Handle(SetPaidRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Order>();

            var order = repository.GetById(request.OrderId);
            RecordNotFoundException.ThowIfNull(order);
            order.SetPaid();

            await unitOfWork.CommitAsync(cancellationToken);

            return new SetPaidResponse
            {
                Id = order.Id,
                CustomerEmail = order.CustomerEmail,
                CustomerName = order.CustomerName,
                CreatedAt = order.CreatedAt,
                Paid = order.Paid,
            };
        }
    }
}
