using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.Notifyer
{
    public class NotifyerService : INotifyerService
    {
        private readonly string UrlNotifyer;
        public NotifyerService(IConfiguration configuration)
        {
            UrlNotifyer = configuration.GetSection("EndPoints").GetSection("UrlNotifyer").Value;
        }

        public async Task Notify(string eventName, object data)
        {
            using var client = new HttpClient();
            var dataContent = GetDataContent(new { eventName, data });

            HttpResponseMessage response = await client.PostAsync(UrlNotifyer, dataContent);

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                throw new ArgumentException($"Não foi possivel enviar a notificação.");
            }
        }

        private HttpContent GetDataContent(object data)
        {
            var jsonData = JsonConvert.SerializeObject(data, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            return new StringContent(jsonData, Encoding.UTF8, "application/json");
        }
    }
}
