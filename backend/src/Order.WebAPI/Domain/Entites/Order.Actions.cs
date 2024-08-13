using OrderService.WebAPI.Domain.Validations;

namespace OrderService.WebAPI.Domain.Entites
{
    public partial class Order
    {
        public void ChangeCustomerName(string customerName)
        {
            Guard.Enforce(ValidateCustomerName(customerName));

            CustomerName = customerName;
        }

        public void ChangeCustomerEmail(string customerEmail)
        {
            Guard.Enforce(ValidateCustomerEmail(customerEmail));

            CustomerEmail = customerEmail;
        }

        public void SetPaid()
        {
            Paid = true;
        }
    }
}
