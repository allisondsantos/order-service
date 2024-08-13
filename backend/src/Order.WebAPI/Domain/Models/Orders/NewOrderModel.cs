using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Domain.Models.Orders
{
    [ExcludeFromCodeCoverage]
    public sealed class NewOrderModel
    {
        public string CustomerName { get; set; } = default!;

        public string CustomerEmail { get; set; } = default!;
    }
}
