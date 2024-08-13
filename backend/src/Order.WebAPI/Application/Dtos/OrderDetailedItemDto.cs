using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Dtos
{
    [ExcludeFromCodeCoverage]
    public class OrderDetailedItemDto
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public string ProductName { get; set; } = default!;

        public decimal UnityPrice { get; set; }

        public decimal Quantity { get; set; }
    }
}
