using MediatR;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.OrderItems.RemoveOrderItem
{
    public class RemoveOrderItemHandler(IUnitOfWork unitOfWork) : IRequestHandler<RemoveOrderItemRequest, RemoveOrderItemResponse>
    {
        public async Task<RemoveOrderItemResponse> Handle(RemoveOrderItemRequest request, CancellationToken cancellationToken)
        {
            var repository = unitOfWork.GetRepository<OrderItem>();
            var orderItem = await repository.FindBy(x => x.Id == request.OrderItemId)
                .AsNoTracking()
                .FirstOrDefaultAsync();

            RecordNotFoundException.ThowIfNull(orderItem);

            repository.Delete(orderItem);

            await unitOfWork.CommitAsync(cancellationToken);

            return new RemoveOrderItemResponse
            {
                Removed = true,
            };
        }
    }
}
