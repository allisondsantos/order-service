using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Interfaces;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.Application.Orders.CreateOrder
{
    public sealed class CreateOrderHandler(IUnitOfWork unitOfWork) :
        IRequestHandler<CreateOrderRequest, CreateOrderResponse>
    {
        public async Task<CreateOrderResponse> Handle(CreateOrderRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Order>();

            var order = new Order(new NewOrderModel
            {
                CustomerEmail = request.CustomerEmail,
                CustomerName = request.CustomerName,
            });

            repository.Add(order);
            await unitOfWork.CommitAsync(cancellationToken);

            return new CreateOrderResponse
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
