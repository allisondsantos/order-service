using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Product
    {
        public void ChangeName(string name)
        {
            Guard.Enforce(ValidadeName(name));

            Name = name;
        }

        public void ChangePrice(decimal price)
        {
            Guard.Enforce(ValidatePrice(price));

            Price = price;
        }
    }
}
