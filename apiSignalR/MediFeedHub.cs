using Microsoft.AspNetCore.SignalR;

namespace apiSignalR
{
    public class MediFeedHub : Hub<IMediFeedHub>
    {
        public async Task SendMessagesToUser(List<string> message)
        {
            await Clients.All.SendMessagesToUser(message);
        }
    
        public MediFeedHub()
        {
        }

        //public async Task RegisterForFeed(string groupName)
        //{
        //    try
        //    {
        //        await Groups.AddToGroupAsync(
        //            Context.ConnectionId, groupName);
        //    }
        //    catch(Exception ex)
        //    {

        //    }
        //}
    }
}
