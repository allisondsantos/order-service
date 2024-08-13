using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.RemoveOrder
{
    [ExcludeFromCodeCoverage]
    public sealed class RemoveOrderResponse
    {
        public bool Removed { get; set; }
    }
}
