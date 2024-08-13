using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.GetAllOrders
{
    [ExcludeFromCodeCoverage]
    public sealed class GetAllOrdersRequest
    {
        public int? Id { get; set; }

        public string? CustomerName { get; set; }
    }
}
