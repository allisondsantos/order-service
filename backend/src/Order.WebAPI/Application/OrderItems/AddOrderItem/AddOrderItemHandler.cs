using MediatR;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.Application.OrderItems.AddOrderItem
{
    public sealed class AddOrderItemHandler(IUnitOfWork unitOfWork)
        : IRequestHandler<AddOrderItemRequest, AddOrderItemResponse>
    {
        public async Task<AddOrderItemResponse> Handle(
            AddOrderItemRequest request,
            CancellationToken cancellationToken)
        {
            var order = await unitOfWork.GetRepository<Order>()
                .FindBy(x => x.Id == request.OrderId)
                .Include(x => x.OrderItems)
                .AsNoTracking()
                .FirstOrDefaultAsync();

            RecordNotFoundException.ThowIfNull(order);

            var repository = unitOfWork.GetRepository<OrderItem>();

            var orderItem = new OrderItem(new NewOrderItemModel
            {
                OrderId = request.OrderId,
                ProductId = request.ProductId,
                Quantity = request.Quantity,
            });

            repository.Add(orderItem);
            await unitOfWork.CommitAsync(cancellationToken);

            return new AddOrderItemResponse
            {
                OrderItemId = orderItem.Id,
            };
        }
    }
}
