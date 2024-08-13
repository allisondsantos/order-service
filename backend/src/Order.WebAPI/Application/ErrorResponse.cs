using OrderService.WebAPI.Domain.Validations;
using System.Diagnostics.CodeAnalysis;

namespace OrderService.WebAPI.Application
{
    [ExcludeFromCodeCoverage]

    public sealed class ErrorResponse
    {
        public string Message { get; set; } = default!;

        public IReadOnlyCollection<ValidationFail> Errors { get; set; } = default!;
    }
}
