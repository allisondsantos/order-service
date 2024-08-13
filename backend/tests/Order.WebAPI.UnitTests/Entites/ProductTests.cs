using FluentAssertions;
using FluentAssertions.Execution;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Domain.Exceptions;
using OrderService.WebAPI.Domain.Models.Orders;

namespace OrderService.WebAPI.UnitTests.Entites
{
    public partial class ProductTests
    {
        [Fact]
        public void ShouldNotCreateProductWhenModelIsNull()
        {
            // Arrange 
            NewProductModel newProductModel = default!;

            // Act
            var action = () => new Product(newProductModel);

            // Assert
            using (var assertion = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Theory]
        [MemberData(nameof(ShouldNotCreateProductWhenParametersAreInvailidData))]
        public void ShouldNotCreateProductWhenParametersAreInvailid(string propertyName, object? value)
        {
            // Assert
            var newProductModel = new NewProductModel()
            {
                Name = propertyName,
                Price = 1,
            };

            typeof(NewProductModel)
                .GetProperty(propertyName)!
                .SetValue(newProductModel, value);

            // Act
            var action = () => new Product(newProductModel);

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
        public void ShouldNotChangeNameWhenParametersAreInvalid(string? value)
        {
            // Assert
            var newProductModel = new NewProductModel()
            {
                Name = "Product Name",
                Price = 1,
            };

            var newProduct = new Product(newProductModel);

            // Act
            var action = () => newProduct.ChangeName(value);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Fact]
        public void ShouldNotChangePriceWhenParameterValueIsZero()
        {
            // Assert
            var newProductModel = new NewProductModel()
            {
                Name = "Product Name",
                Price = 1,
            };

            var newProduct = new Product(newProductModel);

            // Act
            var action = () => newProduct.ChangePrice(0m);

            // Assert
            using (var assertions = new AssertionScope())
            {
                _ = action.Should().ThrowExactly<CustomValidationException>();
            }
        }

        [Fact]
        public void ShouldCreateProductCorrectly()
        {
            // Arrange
            var newProductModel = new NewProductModel()
            {
                Name = "Product Name",
                Price = 1,
            };

            // Act
            var newProduct = new Product(newProductModel);

            // Assert
            using (var assertion = new AssertionScope())
            {
                _ = newProduct.Name.Should().Be(newProductModel.Name);
                _ = newProduct.Price.Should().Be(newProductModel.Price);
            }
        }

        [Fact]
        public void ShouldChangeNameCorrectly()
        {
            // Arrange
            var newProductModel = new NewProductModel()
            {
                Name = "Product Name",
                Price = 1,
            };

            var newProduct = new Product(newProductModel);
            var newName = "New Product Name";

            // Act
            newProduct.ChangeName(newName);

            // Assert
            using (var assertion = new AssertionScope())
            {
                _ = newProduct.Name.Should().Be(newName);
            }
        }

        [Fact]
        public void ShouldChangePriceCorrectly()
        {
            // Arrange
            var newProductModel = new NewProductModel()
            {
                Name = "Product Name",
                Price = 1,
            };

            var newProduct = new Product(newProductModel);
            var newPrice = 2;

            // Act
            newProduct.ChangePrice(newPrice);

            // Assert
            using (var assertion = new AssertionScope())
            {
                _ = newProduct.Price.Should().Be(newPrice);
            }
        }
    }
}
