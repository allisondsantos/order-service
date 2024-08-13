using OrderService.WebAPI.Domain.Models.Orders;
using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Product : EntityBase
    {
        protected Product()
        {

        }

        public Product(NewProductModel model)
        {
            Guard.NotNull(model, nameof(model));
            Guard.Enforce(CanCreateANewProduct(model));

            Name = model.Name;
            Price = model.Price;
        }

        public string Name { get; set; } = default!;

        public decimal Price { get; set; }

        public IReadOnlyCollection<OrderItem> OrderItems => _ordermItens;
        private readonly List<OrderItem> _ordermItens = new();
    }
}
