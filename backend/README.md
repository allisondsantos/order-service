# Order Service Web API

## Overview

The Order Service Web API is a RESTful API built using .NET Core. It is designed to manage orders, providing functionality to create, retrieve, update, and delete orders.

## Features

- Create Order: Add a new order to the system.
- Retrieve Orders: Get details of a single order or list all orders.
- Update Order: Modify an existing order.
- Delete Order: Remove an order from the system.
- Create Product: Add a new product to the system.
- Retrieve Products: Get details of a single product or list all products.
- Update Product: Modify an existing product.
- Delete Product: Remove an product from the system.

## Technologies

- C#
- ASP.NET Core 8.0
- Entity Framework Core
- SQL Server
- Swagger for API documentation
- MediatR  

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)
- SQL Server

## Getting Started

### Setup Database  

1. Update the connection string in appsettings.development.json:  

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=OrderServiceDb;User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;"
}
```  

_The migrations are applied when you run the project._

### Run the API

1. Restore the dependencies and run the application:

```bash
dotnet restore
dotnet run --project ./src/Order.WebAPI/
```  

2. The API will be available at `https://localhost:7081` or `http://localhost:5222`).

### API Documentation

The API documentation is generated using Swagger and can be accessed at `https://localhost:7081/swagger` after running the API.

### Docker Image

To create a docker image, in the `backend` folder, run:

```bash
docker build --pull --rm -f ".docker\Dockerfile" -t order-api-backend:latest "."
```
