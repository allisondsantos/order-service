using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Orders.ChangeCustomerEmail
{
    [ExcludeFromCodeCoverage]
    public sealed class ChangeCustomerEmailRequest : IRequest<ChangeCustomerEmailResponse>
    {
        public int OrderId { get; set; }

        public string CustomerEmail { get; set; } = default!;
    }
}
