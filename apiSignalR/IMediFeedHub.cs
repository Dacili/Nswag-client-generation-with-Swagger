using Microsoft.AspNetCore.SignalR;

namespace apiSignalR
{
    public interface IMediFeedHub { 
   
        Task SendMessagesToUser(List<string> message);
    }
}
