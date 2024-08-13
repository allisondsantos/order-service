using MediatR;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.Orders.RemoveOrder
{
    public sealed class RemoveOrderHandler(IUnitOfWork unitOfWork) : IRequestHandler<RemoveOrderRequest, RemoveOrderResponse>
    {
        public async Task<RemoveOrderResponse> Handle(RemoveOrderRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<Order>();

            var order = repository.GetById(request.OrderId);
            RecordNotFoundException.ThowIfNull(order);

            repository.Delete(order);
            await unitOfWork.CommitAsync(cancellationToken);

            return new RemoveOrderResponse
            {
                Removed = true,
            };
        }
    }
}
