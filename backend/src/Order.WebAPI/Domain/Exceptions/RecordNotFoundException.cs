using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;

namespace OrderService.WebAPI.Domain.Exceptions
{
    public class RecordNotFoundException : Exception
    {
        public RecordNotFoundException(string paramName) : base($"No records found for the entity {paramName}.")
        {

        }

        public static void ThowIfNull([NotNull] object? argument, [CallerArgumentExpression(nameof(argument))] string? paramName = null)
        {
            if (argument is null)
            {
                throw new RecordNotFoundException(paramName!);
            }
        }
    }
}
