using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.UnitTests.Entites
{
    public partial class ProductTests
    {
        public static TheoryData<string, object?> ShouldNotCreateProductWhenParametersAreInvailidData
            => new TheoryData<string, object?>
            {
                {nameof(NewProductModel.Name), null},
                {nameof(NewProductModel.Name), string.Empty},
                {nameof(NewProductModel.Name), "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},

                {nameof(NewProductModel.Price), null},
                {nameof(NewProductModel.Price), 0m},
            };
    }
}
