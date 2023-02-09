using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TestWebApplication.Domain.Repositories.Abstractions;
using TestWebApplication.Domain.Repositories.Implementations;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;
services.AddControllers();

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
services.AddScoped<IFormRepository, FormRepository>();
var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();