using System.Threading.Tasks;

namespace FavoDeMel.Infrastructure.Notifyer
{
    public interface INotifyerService
    {
        Task Notify(string eventName, object data);
    }
}
