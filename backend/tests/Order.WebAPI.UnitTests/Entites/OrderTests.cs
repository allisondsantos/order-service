using FluentAssertions;
using FluentAssertions.Execution;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.UnitTests.Entites
{
    public partial class OrderTests
    {
        [Fact]
        public void ShouldNotCreateOrderWhenModelIsNull()
        {
            // Arrange
            NewOrderModel newOrderModel = default!;

            // Act
            var action = () => new Order(newOrderModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [MemberData(nameof(ShouldNotCreateWhenParameterIsInvalidData))]
        public void ShouldNotCreateOrderWhenParametersAreInvalid(string propertyName, object? value)
        {
            // Arrange
            var newOrderModel = new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            };
            typeof(NewOrderModel)
                .GetProperty(propertyName)!
                .SetValue(newOrderModel, value);

            // Act
            var action = () => new Order(newOrderModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        [InlineData("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...")]
        public void ShouldNotChangeCustomerNameWhenParametersAreInvalid(string? value)
        {
            // Arrange
            var newOrder = new Order(new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            });

            // Act
            var action = () => newOrder.ChangeCustomerName(value);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        [InlineData("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...")]
        [InlineData("@akaksdfj@.com")]
        public void ShouldNotChangeCustomerEmailWhenParameterIsInvalid(string? value)
        {
            // Arrange
            var newOrder = new Order(new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            });

            // Act
            var action = () => newOrder.ChangeCustomerEmail(value);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Fact]
        public void ShouldCreateOrderCorrectly()
        {
            // Arrange
            var newOrderModel = new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            };

            // Act
            var newOrder = new Order(newOrderModel);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.CustomerEmail.Should().Be(newOrderModel.CustomerEmail);
                _ = newOrder.CustomerName.Should().Be(newOrderModel.CustomerName);
                _ = newOrder.CreatedAt.Date.Should().Be(DateTime.Now.Date);
                _ = newOrder.Paid.Should().BeFalse();
            }
        }

        [Fact]
        public void ShouldChangeCustomerNameCorrectly()
        {
            // Arrange
            var newOrder = new Order(new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            });
            var newCustomerName = "New CustomerName";

            // Act
            newOrder.ChangeCustomerName(newCustomerName);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.CustomerName.Should().Be(newCustomerName);
            }
        }

        [Fact]
        public void ShouldChangeCustomerEmailCorrectly()
        {
            // Arrange
            var newOrder = new Order(new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            });
            var newCustomerEmail = "other.valid@email.com";

            // Act
            newOrder.ChangeCustomerEmail(newCustomerEmail);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.CustomerEmail.Should().Be(newCustomerEmail);
            }
        }

        [Fact]
        public void ShouldChangeSetPaidCorrectly()
        {
            // Arrange
            var newOrder = new Order(new NewOrderModel()
            {
                CustomerEmail = "valid@email.com",
                CustomerName = "CustomerName",
            });

            // Act
            newOrder.SetPaid();

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = newOrder.Paid.Should().BeTrue();
            }
        }
    }
}
