using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Products.GetAllProducts
{
    [ExcludeFromCodeCoverage]
    public sealed class GetAllProductsRequest
    {
        public int? Id { get; set; }

        public string? Name { get; set; }
    }
}
