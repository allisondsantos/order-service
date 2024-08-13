using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Domain.Models.Orders
{
    [ExcludeFromCodeCoverage]
    public class NewProductModel
    {
        public string Name { get; set; } = default!;

        public decimal Price { get; set; }
    }
}
