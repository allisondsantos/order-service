using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.UnitTests.Entites
{
    public partial class OrderTests
    {
        public static TheoryData<string, object?> ShouldNotCreateWhenParameterIsInvalidData
            => new TheoryData<string, object?>()
            {
                { nameof(NewOrderModel.CustomerEmail), null },
                { nameof(NewOrderModel.CustomerEmail), string.Empty },
                { nameof(NewOrderModel.CustomerEmail), "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
                { nameof(NewOrderModel.CustomerEmail), "@akaksdfj@.com" },

                { nameof(NewOrderModel.CustomerName), null },
                { nameof(NewOrderModel.CustomerName), string.Empty },
                { nameof(NewOrderModel.CustomerName), "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
            };
    }
}

