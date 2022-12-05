using apiSignalR;
using System.Reflection.Metadata.Ecma335;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();
builder.Services.AddLogging();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("https://localhost:4200")
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .AllowCredentials()
                   .SetIsOriginAllowedToAllowWildcardSubdomains();
        });
  
               
                   
});
var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    //https://localhost:7163/swagger/v1/swagger.json
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
//app.MapHub<MediFeedHub>("/MediFeed");
app.MapHub<MediFeedHub>("/mediMessaging");

app.MapGet("/api/groups", () => {
    return new string[] { "Science", "IT", "Psychology", "Cooking", "Astronomy" };
}).WithName("GetAllGroups");
app.Run();
