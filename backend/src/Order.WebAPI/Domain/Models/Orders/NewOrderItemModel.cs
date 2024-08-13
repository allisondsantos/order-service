using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Domain.Models.Orders
{
    [ExcludeFromCodeCoverage]
    public class NewOrderItemModel
    {
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}
