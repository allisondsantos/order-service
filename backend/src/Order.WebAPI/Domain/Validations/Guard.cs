using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Extensions;

namespace OrderService.WebAPI.Domain.Validations
{
    public static class Guard
    {
        public static void Enforce(List<ValidationFail> fails)
        {
            if (fails is null)
                return;

            if (fails.Count is 0)
                return;

            throw new CustomValidationException(fails);
        }

        public static void NotNull(object? obj, string propertyName)
        {
            Enforce(Validation.Init.NotNull(obj, propertyName));
        }
    }
}
