using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Dtos
{
    [ExcludeFromCodeCoverage]
    public class OrderDetailedDto
    {
        public int Id { get; set; }

        public string CustomerName { get; set; } = default!;

        public string CustomerEmail { get; set; } = default!;

        public bool Paid { get; set; }

        public decimal TotalAmount { get; set; }

        public IEnumerable<OrderDetailedItemDto> OrderItems { get; set; } = default!;
    }
}
