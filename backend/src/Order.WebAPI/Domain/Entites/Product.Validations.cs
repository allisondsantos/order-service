using OrderService.WebAPI.Domain.Extensions;
using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Product
    {
        public const int NameMaxLength = 20;
        public const int PricePrecision = 10;
        public const int PriceScale = 2;

        private List<ValidationFail> CanCreateANewProduct(NewProductModel model)
            => Validation.Init
                .Join(
                    ValidadeName(model.Name),
                    ValidatePrice(model.Price)
                );

        private List<ValidationFail> ValidadeName(string value)
            => Validation.Init
                .NotNullOrWhiteSpace(value, nameof(Name))
                .MaximumLength(value, NameMaxLength, nameof(Name));


        private List<ValidationFail> ValidatePrice(decimal value)
            => Validation.Init
                .GreaterThan(value, 0, nameof(Price));
    }
}
