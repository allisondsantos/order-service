using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Orders.ChangeCustomerName
{
    public sealed class ChangeCustomerNameHandler(IUnitOfWork unitOfWork) : IRequestHandler<ChangeCustomerNameRequest, ChangeCustomerNameResponse>
    {
        public async Task<ChangeCustomerNameResponse> Handle(
            ChangeCustomerNameRequest request,
            CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Order>();

            var order = repository.GetById(request.OrderId);
            RecordNotFoundException.ThowIfNull(order);

            order.ChangeCustomerName(request.CustomerName);

            await unitOfWork.CommitAsync(cancellationToken);

            return new ChangeCustomerNameResponse
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
