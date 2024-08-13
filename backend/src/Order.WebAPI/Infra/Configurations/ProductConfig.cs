using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderService.WebAPI.Domain.Entites;

namespace OrderService.WebAPI.Infra.Configurations
{
    public sealed class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            _ = builder.ToTable("Products");
            _ = builder.HasKey(p => p.Id)
                .HasName("PK_Products");

            _ = builder.Property(p => p.Id)
                .HasColumnName("Id")
                .IsRequired();

            _ = builder.Property(p => p.Name)
                .HasColumnName("Name")
                .HasMaxLength(Product.NameMaxLength)
                .IsRequired();

            _ = builder.Property(p => p.Price)
                .HasColumnName("Price")
                .HasPrecision(Product.PricePrecision, Product.PriceScale)
                .IsRequired();
        }
    }
}
