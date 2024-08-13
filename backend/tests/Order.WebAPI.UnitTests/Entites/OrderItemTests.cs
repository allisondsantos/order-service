using FluentAssertions;
using FluentAssertions.Execution;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.UnitTests.Entites
{
    public class OrderItemTests
    {
        [Fact]
        public void ShouldNotCreateOrderitemWhenModelIsNull()
        {
            // Arrange
            NewOrderItemModel newOrderItemModel = default!;

            // Act
            var action = () => new OrderItem(newOrderItemModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [InlineData(0)]
        public void ShouldNotCreateOrderItemWhenParametersAreInvalid(int value)
        {
            // Arrange
            var newOrderItemModel = new NewOrderItemModel()
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = value,
            };

            // Act
            var action = () => new OrderItem(newOrderItemModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [InlineData(0)]
        public void ShouldNotChangeQuantityWhenParametersAreInvalid(int value)
        {
            // Arrange
            var newOrderItemModel = new NewOrderItemModel()
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            };
            var newOrder = new OrderItem(newOrderItemModel);

            // Act
            var action = () => newOrder.ChangeQuantity(value);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }


        [Fact]
        public void ShouldCreateOrderItemCorrectly()
        {
            // Arrange
            var newOrderItemModel = new NewOrderItemModel()
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            };

            // Act
            var newOrder = new OrderItem(newOrderItemModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.OrderId.Should().Be(newOrderItemModel.OrderId);
                _ = newOrder.ProductId.Should().Be(newOrderItemModel.ProductId);
                _ = newOrder.Quantity.Should().Be(newOrderItemModel.Quantity);
            }
        }

        [Fact]
        public void ShouldChangeQuantityCorrectly()
        {
            // Arrange
            var newOrderItemModel = new NewOrderItemModel()
            {
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            };
            var newOrder = new OrderItem(newOrderItemModel);
            var newQuantity = 2;
            // Act
            newOrder.ChangeQuantity(newQuantity);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.Quantity.Should().Be(newQuantity);
            }
        }
    }
}
