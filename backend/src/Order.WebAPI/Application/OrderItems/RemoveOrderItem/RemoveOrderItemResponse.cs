using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.OrderItems.RemoveOrderItem
{
    [ExcludeFromCodeCoverage]
    public sealed class RemoveOrderItemResponse
    {
        public bool Removed { get; set; }
    }
}
