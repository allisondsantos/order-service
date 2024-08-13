using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Domain.Entites;
using OrderService.WebAPI.Infra.Configurations;
using OrderService.WebAPI.Infra.Management;

namespace OrderService.WebAPI.Infra
{
    public class ApplicationContext : DbContext, IDbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>(new OrderConfig().Configure);
            modelBuilder.Entity<Product>(new ProductConfig().Configure);
            modelBuilder.Entity<OrderItem>(new OrderItemConfig().Configure);

            base.OnModelCreating(modelBuilder);
        }
    }
}
