using MediatR;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Application.OrderItems.ChangeQuantity
{
    public class ChangeQuantityHandler(IUnitOfWork unitOfWork) : IRequestHandler<ChangeQuantityRequest, ChangeQuantityResponse>
    {
        public async Task<ChangeQuantityResponse> Handle(ChangeQuantityRequest request, CancellationToken cancellationToken)
        {
            var orderItem = await unitOfWork.GetRepository<OrderItem>()
                .FindBy(x => x.Id == request.OrderItemId)
                .Include(x => x.Product)
                .AsNoTracking()
                .FirstOrDefaultAsync();

            RecordNotFoundException.ThowIfNull(orderItem);

            orderItem.ChangeQuantity(request.Quantity);

            await unitOfWork.CommitAsync(cancellationToken);

            return new ChangeQuantityResponse
            {
                Id = orderItem.Id,
                Quantity = orderItem.Quantity,
                ProductId = orderItem.ProductId,
                ProductName = orderItem.Product.Name,
                UnityPrice = orderItem.Product.Price,
            };
        }
    }
}
