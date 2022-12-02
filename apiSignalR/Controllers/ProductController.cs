using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

namespace apiSignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
       
            private IHubContext<MediFeedHub, IMediFeedHub> messageHub;
            public ProductController(IHubContext<MediFeedHub, IMediFeedHub> _messageHub)
            {
                messageHub = _messageHub;
            }


            [HttpPost]
            [Route("productoffers")]
        public async Task<ActionResult> Get([FromBody] string name)
            {
                List<string> offers = new List<string>();
                offers.Add(name);
                //offers.Add("15% Off on HP Pavillion");
                //offers.Add("25% Off on Samsung Smart TV");
                messageHub.Clients.All.SendOffersToUser(offers);
            return Ok();
              //  return JsonConvert.DeserializeObject("Messages sent successfully to all users!");
            }
        }
    }

