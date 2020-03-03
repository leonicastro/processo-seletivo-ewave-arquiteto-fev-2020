FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build-env
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish ./src/FavoDeMel.Web.Api/FavoDeMel.Web.Api.csproj -c Release -o ./src/FavoDeMel.Web.Api/out --no-restore


FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS runtime
WORKDIR /app
COPY --from=build-env /app/src/FavoDeMel.Web.Api/out ./

ENTRYPOINT ["dotnet", "FavoDeMel.Web.Api.dll"]
