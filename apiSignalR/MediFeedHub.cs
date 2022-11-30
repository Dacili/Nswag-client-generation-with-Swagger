using Microsoft.AspNetCore.SignalR;

namespace apiSignalR
{
    public class MediFeedHub : Hub
    {
        public MediFeedHub()
        {
        }

        public async Task RegisterForFeed(string groupName)
        {
            await Groups.AddToGroupAsync(
                this.Context.ConnectionId, groupName);
        }
    }
}
