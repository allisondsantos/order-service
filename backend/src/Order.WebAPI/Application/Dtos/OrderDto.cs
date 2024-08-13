using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Dtos
{
    [ExcludeFromCodeCoverage]
    public class OrderDto
    {
        public int Id { get; set; }

        public string CustomerName { get; set; } = default!;

        public string CustomerEmail { get; set; } = default!;

        public DateTime CreatedAt { get; set; }

        public bool Paid { get; set; }

        public decimal TotalAmount { get; set; }
    }
}
