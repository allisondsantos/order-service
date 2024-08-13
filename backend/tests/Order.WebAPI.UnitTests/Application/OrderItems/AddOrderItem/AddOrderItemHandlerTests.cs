using FluentAssertions;
using FluentAssertions.Execution;
using MockQueryable.NSubstitute;
using NSubstitute;
using OrderService.WebAPI.Application.OrderItems.AddOrderItem;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Interfaces;
using OrderService.WebAPI.Domain.Models.Orders;
using System.Linq.Expressions;

namespace OrderService.WebAPI.UnitTests.Application.OrderItems.AddOrderItem
{
    public sealed class AddOrderItemHandlerTests
    {
        [Fact]
        public void HandlingShouldTrowRecordNotFoundException()
        {
            // Arrange
            var request = new AddOrderItemRequest
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            };
            var orderList = new List<Order>();
            var orderSet = orderList.AsQueryable().BuildMockDbSet();

            var unitOfWork = Substitute.For<IUnitOfWork>();
            _ = unitOfWork.GetRepository<Order>().FindBy(Arg.Any<Expression<Func<Order, bool>>>())
                .Returns(orderSet);

            var handler = new AddOrderItemHandler(unitOfWork);
            // Act
            var action = async () => await handler.Handle(
                request,
                CancellationToken.None);

            // Assert
            using (var assertions = new AssertionScope())
                _ = action.Should().ThrowExactlyAsync<RecordNotFoundException>();
        }

        [Fact]
        public async Task HandlingShouldAddAItemCorrectly()
        {
            // Arrange
            var order = new Order(new NewOrderModel
            {
                CustomerEmail = "customer@email.com",
                CustomerName = "CustomerName"
            });
            order.Id = 1;
            var orderList = new List<Order>() { order };
            var orderSet = orderList.AsQueryable().BuildMockDbSet();

            var product = new Product(new NewProductModel
            {
                Name = "Name",
                Price = 1
            });
            order.Id = 1;
            var productList = new List<Product>() { product };
            var productSet = productList.AsQueryable().BuildMockDbSet();

            //var mockContext = new Mock<ApplicationContext>();
            var request = new AddOrderItemRequest
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            };

            var unitOfWork = Substitute.For<IUnitOfWork>();
            _ = unitOfWork.GetRepository<Order>().FindBy(Arg.Any<Expression<Func<Order, bool>>>())
                .Returns(orderSet);

            var handler = new AddOrderItemHandler(unitOfWork);

            // Act
            var result = await handler.Handle(
                request,
                CancellationToken.None);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = result.Should().NotBeNull();
            }
        }
    }
}
