using Microsoft.AspNetCore.SignalR;

namespace apiSignalR
{
    public interface IMediFeedHub { 
   
        Task SendOffersToUser(List<string> message);
    }
}
