using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class OrderItem : EntityBase
    {
        protected OrderItem()
        {

        }

        public OrderItem(NewOrderItemModel model)
        {
            Guard.NotNull(model, nameof(NewOrderItemModel));
            Guard.Enforce(CanCreateANewOrdermItem(model));

            OrderId = model.OrderId;
            ProductId = model.ProductId;
            Quantity = model.Quantity;
        }

        public int OrderId { get; private set; }

        public int ProductId { get; private set; }

        public int Quantity { get; private set; }

        public Order Order { get; private set; } = default!;

        public Product Product { get; private set; } = default!;
    }
}
