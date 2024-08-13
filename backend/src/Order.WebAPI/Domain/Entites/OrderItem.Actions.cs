using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class OrderItem
    {
        public void ChangeQuantity(int quantity)
        {
            Guard.Enforce(ValidateQuantity(quantity));

            Quantity = quantity;
        }
    }
}
