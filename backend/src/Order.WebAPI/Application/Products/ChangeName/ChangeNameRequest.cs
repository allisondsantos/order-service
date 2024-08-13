using MediatR;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application.Products.ChangeName
{
    [ExcludeFromCodeCoverage]
    public sealed class ChangeNameRequest : IRequest<ChangeNameResponse>
    {
        public int ProductId { get; set; }

        public string Name { get; set; } = default!;
    }
}
