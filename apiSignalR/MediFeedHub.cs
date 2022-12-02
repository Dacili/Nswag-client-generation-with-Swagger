using Microsoft.AspNetCore.SignalR;

namespace apiSignalR
{
    public class MediFeedHub : Hub<IMediFeedHub>
    {
        public async Task SendOffersToUser(List<string> message)
        {
            await Clients.All.SendOffersToUser(message);
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
