using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Application;
using OrderService.WebAPI.Application.Dtos;
using OrderService.WebAPI.Application.Orders.ChangeCustomerName;
using OrderService.WebAPI.Application.Orders.CreateOrder;
using OrderService.WebAPI.Application.Orders.GetAllOrders;
using OrderService.WebAPI.Application.Orders.GetOrder;
using OrderService.WebAPI.Application.Orders.RemoveOrder;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class OrderController(
        IMediator mediator,
        IUnitOfWork unitOfWork) : ControllerBase
{
    [HttpGet()]
    [ProducesResponseType<IEnumerable<GetAllOrdersResponse>>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetAllAsync([FromQuery] GetAllOrdersRequest request)
    {
        var repository = unitOfWork.GetRepository<Order>();

        IQueryable<Order> query = repository.GetAll();

        if (request!.Id is not null && request.Id is not 0)
            query = query.Where(x => x.Id == request.Id);

        if (!string.IsNullOrEmpty(request!.CustomerName))
            query = query.Where(x => x.CustomerName.Contains(request.CustomerName!));

        var result = await query
            .Include(o => o.OrderItems)
            .ThenInclude(o => o.Product)
            .Select(o => new GetAllOrdersResponse
            {
                Id = o.Id,
                CustomerName = o.CustomerName,
                CustomerEmail = o.CustomerEmail,
                CreatedAt = o.CreatedAt,
                Paid = o.Paid,
                TotalAmount = o.OrderItems.Sum(i => i.Quantity * i.Product.Price),
            })
            .AsNoTracking()
            .ToListAsync();

        return new OkObjectResult(result);
    }

    [HttpGet("{orderId:int}")]
    [ProducesResponseType<GetOrderResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status404NotFound)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetAsync(int orderId)
    {
        var repository = unitOfWork.GetRepository<Order>();

        var result = await repository
            .FindBy(o => o.Id == orderId)
            .Include(o => o.OrderItems)
            .ThenInclude(o => o.Product)
            .Select(o => new GetOrderResponse()
            {
                Id = o.Id,
                CustomerName = o.CustomerName,
                CustomerEmail = o.CustomerEmail,
                Paid = o.Paid,
                TotalAmount = o.OrderItems.Sum(i => i.Quantity * i.Product.Price),
                OrderItems = o.OrderItems.Select(i => new OrderDetailedItemDto
                {
                    Id = i.Id,
                    ProductId = i.ProductId,
                    ProductName = i.Product.Name,
                    UnityPrice = i.Product.Price,
                    Quantity = i.Quantity

                })
            })
            .AsNoTracking()
            .FirstOrDefaultAsync();

        return new OkObjectResult(result);
    }

    [HttpPost]
    [ProducesResponseType<CreateOrderResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateOrderAsync(
        [FromBody] CreateOrderRequest request)
    {
        var result = await mediator.Send(request);

        return new OkObjectResult(result);
    }

    [HttpPatch("{orderId:int}/ChangeCustomerName")]
    [ProducesResponseType<ChangeCustomerNameResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> ChangeCustomerNameAsync(
        int orderId,
        [FromBody] string newCustomerName)
    {
        var result = await mediator.Send(new ChangeCustomerNameRequest
        {
            OrderId = orderId,
            CustomerName = newCustomerName,
        });

        return new OkObjectResult(result);
    }

    [HttpPatch("{orderId:int}/ChangeCustomerEmail")]
    [ProducesResponseType<ChangeCustomerNameResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> ChangeCustomerEmailAsync(
        int orderId,
        [FromBody] string newCustomerEmail)
    {
        var result = await mediator.Send(new ChangeCustomerNameRequest
        {
            OrderId = orderId,
            CustomerName = newCustomerEmail,
        });

        return new OkObjectResult(result);
    }


    [HttpDelete("{orderId:int}")]
    [ProducesResponseType<RemoveOrderResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> RemoveOrderAsync(int orderId)
    {
        var result = await mediator.Send(new RemoveOrderRequest { OrderId = orderId });

        return new OkObjectResult(result);
    }
}
