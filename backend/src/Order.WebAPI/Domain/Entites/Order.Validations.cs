using OrderService.WebAPI.Domain.Extensions;
using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Order
    {
        public const int CustomerEmailMaxLength = 60;
        public const int CustomerNameMaxLength = 60;

        private List<ValidationFail> CanCreateANewOrder(NewOrderModel model)
            => Validation.Init
                .Join(
                    ValidateCustomerEmail(model.CustomerEmail),
                    ValidateCustomerName(model.CustomerName)
                );

        private List<ValidationFail> ValidateCustomerEmail(string value)
            => Validation.Init
                .NotNullOrWhiteSpace(value, nameof(CustomerEmail))
                .MaximumLength(value, CustomerEmailMaxLength, nameof(CustomerEmail))
                .IsEmailValid(value, nameof(CustomerEmail));

        private List<ValidationFail> ValidateCustomerName(string value)
            => Validation.Init
                .NotNullOrWhiteSpace(value, nameof(CustomerName))
                .MaximumLength(value, CustomerNameMaxLength, nameof(CustomerName));
    }
}
