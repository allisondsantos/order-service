using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.ChangeCustomerName
{
    [ExcludeFromCodeCoverage]
    public sealed class ChangeCustomerNameRequest : IRequest<ChangeCustomerNameResponse>
    {
        public int OrderId { get; set; }

        public string CustomerName { get; set; } = default!;
    }
}
