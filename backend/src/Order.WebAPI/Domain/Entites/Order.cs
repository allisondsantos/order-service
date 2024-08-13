using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Order : EntityBase
    {
        protected Order()
        {

        }

        public Order(NewOrderModel model)
        {
            Guard.NotNull(model, nameof(NewOrderModel));
            Guard.Enforce(CanCreateANewOrder(model));

            CustomerName = model.CustomerName;
            CustomerEmail = model.CustomerEmail;
            CreatedAt = DateTime.Now;
        }

        public string CustomerName { get; private set; } = default!;

        public string CustomerEmail { get; private set; } = default!;

        public DateTime CreatedAt { get; private set; }

        public bool Paid { get; private set; }

        public IReadOnlyCollection<OrderItem> OrderItems => _ordermItems;
        private List<OrderItem> _ordermItems = new();
    }
}
