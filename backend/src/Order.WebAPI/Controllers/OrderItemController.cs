using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Application;
using OrderService.WebAPI.Application.OrderItems.AddOrderItem;
using OrderService.WebAPI.Application.OrderItems.ChangeQuantity;
using OrderService.WebAPI.Application.OrderItems.GetOrderItem;
using OrderService.WebAPI.Application.OrderItems.RemoveOrderItem;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OrderItemController(
        IMediator mediator,
        IUnitOfWork unitOfWork) : ControllerBase
    {
        [HttpGet("{orderItemId:int}")]
        [ProducesResponseType<GetOrderItemResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status404NotFound)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetAsync(int orderItemId)
        {
            var repository = unitOfWork.GetRepository<OrderItem>();

            var result = await repository
                .FindBy(i => i.Id == orderItemId)
                .Include(i => i.Product)
                .Select(i => new GetOrderItemResponse
                {
                    Id = i.Id,
                    ProductId = i.ProductId,
                    ProductName = i.Product.Name,
                    UnityPrice = i.Product.Price,
                    Quantity = i.Quantity

                })
                .AsNoTracking()
                .FirstOrDefaultAsync();

            return new OkObjectResult(result);
        }

        [HttpPost()]
        [ProducesResponseType<AddOrderItemResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> AddOrderItemAsync([FromBody] AddOrderItemRequest request)
        {
            var result = await mediator.Send(request);

            return new OkObjectResult(result);
        }

        [HttpPatch("{orderItemId:int}/ChangeQuantity")]
        [ProducesResponseType<ChangeQuantityResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ChangeQuantityAsync(
            int orderItemId,
            [FromBody] ChangeQuantityRequest request)
        {
            if (orderItemId != request.OrderItemId)
            {
                return new BadRequestResult();
            }

            var result = await mediator.Send(request);

            return new OkObjectResult(result);
        }

        [HttpDelete("{orderItemId:int}")]
        [ProducesResponseType<RemoveOrderItemResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> RemoveOrderItemAsync(int orderItemId)
        {
            var result = await mediator.Send(new RemoveOrderItemRequest
            {
                OrderItemId = orderItemId,
            });

            return new OkObjectResult(result);
        }
    }
}
