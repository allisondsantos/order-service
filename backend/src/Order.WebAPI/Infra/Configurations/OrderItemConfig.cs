using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderService.WebAPI.Domain.Entites;

namespace OrderService.WebAPI.Infra.Configurations
{
    public class OrderItemConfig : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            _ = builder.ToTable("OrderItems");
            _ = builder.HasKey(p => p.Id)
                .HasName("PK_OrderItems"); ;

            _ = builder.HasOne(orderItem => orderItem.Order)
                .WithMany(order => order.OrderItems)
                .HasForeignKey(orderItem => orderItem.OrderId)
                .HasConstraintName("FK_OrderItem_Order");

            _ = builder.HasOne(orderItem => orderItem.Product)
                .WithMany(order => order.OrderItems)
                .HasForeignKey(orderItem => orderItem.ProductId)
                .HasConstraintName("FK_OrderItem_Product");

            _ = builder.Property(p => p.Id)
                .HasColumnName("Id")
                .IsRequired();

            _ = builder.Property(p => p.OrderId)
                .HasColumnName("OrderId")
                .IsRequired();

            _ = builder.Property(p => p.ProductId)
                .HasColumnName("ProductId")
                .IsRequired();

            _ = builder.Property(p => p.Quantity)
                .HasColumnName("Quantity")
                .IsRequired();
        }
    }
}
