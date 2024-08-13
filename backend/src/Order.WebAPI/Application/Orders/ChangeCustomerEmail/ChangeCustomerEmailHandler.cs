using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Orders.ChangeCustomerEmail
{
    public sealed class ChangeCustomerEmailHandler(IUnitOfWork unitOfWork)
        : IRequestHandler<ChangeCustomerEmailRequest, ChangeCustomerEmailResponse>
    {
        public async Task<ChangeCustomerEmailResponse> Handle(
            ChangeCustomerEmailRequest request,
            CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Order>();

            var order = repository.GetById(request.OrderId);
            RecordNotFoundException.ThowIfNull(order);

            order.ChangeCustomerEmail(request.CustomerEmail);

            await unitOfWork.CommitAsync(cancellationToken);

            return new ChangeCustomerEmailResponse
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
