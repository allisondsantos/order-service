using OrderService.WebAPI.Domain.Extensions;
using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class OrderItem
    {
        private List<ValidationFail> CanCreateANewOrdermItem(NewOrderItemModel model)
            => Validation.Init.Join(ValidateQuantity(model.Quantity));

        private List<ValidationFail> ValidateQuantity(int value)
            => Validation.Init
                .GreaterThan(value, 0, nameof(Quantity));
    }
}
