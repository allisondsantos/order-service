#build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
COPY .. ./

RUN dotnet publish src/Order.WebAPI/OrderService.WebAPI.csproj -c Release -o ./out

#run
FROM mcr.microsoft.com/dotnet/sdk:8.0 
WORKDIR /app
COPY --from=build-env /app/out ./

ENTRYPOINT ["dotnet", "OrderService.WebAPI.dll"]