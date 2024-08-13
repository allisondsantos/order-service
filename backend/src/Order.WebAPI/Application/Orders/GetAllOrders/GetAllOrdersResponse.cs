using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.GetAllOrders
{
    [ExcludeFromCodeCoverage]
    public sealed class GetAllOrdersResponse
    {
        public int Id { get; set; }

        public string CustomerName { get; set; } = default!;

        public string CustomerEmail { get; set; } = default!;

        public DateTime CreatedAt { get; set; }

        public bool Paid { get; set; }

        public decimal TotalAmount { get; set; }
    }
}
