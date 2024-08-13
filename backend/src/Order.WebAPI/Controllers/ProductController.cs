using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Application;
using OrderService.WebAPI.Application.Products.ChangeName;
using OrderService.WebAPI.Application.Products.ChangePrice;
using OrderService.WebAPI.Application.Products.CreateProduct;
using OrderService.WebAPI.Application.Products.GetAllProducts;
using OrderService.WebAPI.Application.Products.GetProduct;
using OrderService.WebAPI.Application.Products.RemoveProduct;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Interfaces;

namespace OrderService.WebAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProductController(
        IMediator mediator,
        IUnitOfWork unitOfWork) : ControllerBase
    {
        [HttpGet()]
        [ProducesResponseType<IEnumerable<GetAllProductsResponse>>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetAllAsync([FromQuery] GetAllProductsRequest request)
        {

            var repository = unitOfWork.GetRepository<Product>();

            IQueryable<Product> query = repository.GetAll();

            if (request!.Id is not null && request.Id is not 0)
                query = query.Where(x => x.Id == request.Id);

            if (!string.IsNullOrEmpty(request!.Name))
                query = query.Where(x => x.Name.Contains(request.Name!));

            var result = await query.Select(x => new GetAllProductsResponse
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
            })
            .AsNoTracking()
            .ToListAsync();

            return new OkObjectResult(result);
        }

        [HttpGet("{productId:int}")]
        [ProducesResponseType<GetProductResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status404NotFound)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetAsync(int productId)
        {
            var repository = unitOfWork.GetRepository<Product>();

            IQueryable<Product> query = repository.FindBy(x => x.Id == productId);
            var result = await query.Select(x => new GetProductResponse
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
            })
            .AsNoTracking()
            .FirstOrDefaultAsync();

            return new OkObjectResult(result);
        }

        [HttpPost()]
        [ProducesResponseType<CreateProductResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> CreateProductAsync([FromBody] CreateProductRequest request)
        {
            var result = await mediator.Send(request);

            return new OkObjectResult(result);
        }

        [HttpPatch("{productId:int}/ChangeName")]
        [ProducesResponseType<CreateProductResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ChangeNameAsync(
            int productId,
            [FromBody] ChangeNameRequest request)
        {
            if (productId != request.ProductId)
            {
                return new BadRequestResult();
            }

            var result = await mediator.Send(request);

            return new OkObjectResult(result);
        }

        [HttpPatch("{productId:int}/ChangePrice")]
        [ProducesResponseType<CreateProductResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ChangePriceAsync(
            int productId,
            [FromBody] ChangePriceRequest request)
        {
            if (productId != request.ProductId)
            {
                return new BadRequestResult();
            }
            var result = await mediator.Send(request);

            return new OkObjectResult(result);
        }

        [HttpDelete("{productId:int}")]
        [ProducesResponseType<RemoveProductResponse>(StatusCodes.Status200OK)]
        [ProducesResponseType<ErrorResponse>(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> RemoveOrderAsync(int productId)
        {
            var result = await mediator.Send(new RemoveProductRequest { ProductId = productId });

            return new OkObjectResult(result);
        }
    }
}
