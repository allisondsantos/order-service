using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderService.WebAPI.Domain.Entites;

namespace OrderService.WebAPI.Infra.Configurations
{
    public sealed class OrderConfig : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            _ = builder.ToTable("Orders");
            _ = builder.HasKey(x => x.Id)
                .HasName("PK_Orders");

            _ = builder.Property(p => p.Id)
                .HasColumnName("Id")
                .IsRequired();

            _ = builder.Property(p => p.CustomerName)
                .HasColumnName("CustomerName")
                .HasMaxLength(Order.CustomerEmailMaxLength);

            _ = builder.Property(p => p.CustomerEmail)
                .HasColumnName("CustomerEmail")
                .HasMaxLength(Order.CustomerEmailMaxLength);

            _ = builder.Property(p => p.CreatedAt)
                .HasColumnName("CreatedAt");

            _ = builder.Property(p => p.Paid)
                .HasColumnName("Paid");
        }
    }
}
