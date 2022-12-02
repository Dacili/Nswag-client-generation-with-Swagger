using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace apiSignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
       
            private IHubContext<MediFeedHub, IMediFeedHub> messageHub;
            public MessageController(IHubContext<MediFeedHub, IMediFeedHub> _messageHub)
            {
                messageHub = _messageHub;
            }


            [HttpPost]
            [Route("recieveAndSendMessage")]
        public async Task<ActionResult> Get([FromBody] string name)
            {
                List<string> msgs = new List<string>() { name};
                await messageHub.Clients.All.SendMessagesToUser(msgs);
                return Ok();
            }
        }
    }

