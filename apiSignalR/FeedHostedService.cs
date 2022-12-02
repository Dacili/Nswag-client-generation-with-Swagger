//using System.Timers;
//using Microsoft.AspNetCore.SignalR;
//using apiSignalR.Models;

//namespace apiSignalR
//{
//    public class FeedHostedService : IHostedService
//    {
//        private readonly IHubContext<MediFeedHub> _feedHubContext;
//        private readonly ILogger<FeedHostedService> _logger;
//        private readonly System.Timers.Timer _timer;
//        private string[] _groups = { "Science", "IT", "Psychology", "Cooking", "Astronomy" };
//        private string[] _authors = {"Medina", "Neko Tamo", "Ševal", "Zulejha"};
//        private readonly Random _randomGroup;

//        public FeedHostedService(
//            IHubContext<MediFeedHub> feedHubContext
//            ,
//            ILogger<FeedHostedService> logger
//            )
//        {
//            _feedHubContext = feedHubContext;
//            _logger = logger;
//            _timer = new System.Timers.Timer(5000);
//            _timer.Elapsed += GenerateAndSendFeed;
//            _randomGroup = new Random(0);
//        }

//        private void GenerateAndSendFeed(
//            object? sender, ElapsedEventArgs e)
//        {
//            // generate random feed object
//            // groupName, postText, timestamp
//            var feed = CreateFeedEntity(Guid.NewGuid().ToString());

//            // send to all users registered to receive feed from group
//            _feedHubContext.Clients.Group(feed.GroupName).SendAsync("GetGroupFeed", feed);

//            // send to all users to receive feed
//            _feedHubContext.Clients.All.SendAsync("GetFeed", feed);

//            // send to all users registered to receive feed from group
//            _feedHubContext.Clients.Group(feed.GroupName).SendAsync("GetGroupFeed", feed);
//        }

//        private Feed CreateFeedEntity(string id)
//        {
//            var nextGroupIndex = _randomGroup.Next(_groups.Length - 1);
//            var nextAuthorIndex = _randomGroup.Next(_authors.Length - 1);

//            var author =
//              (nextAuthorIndex < _authors.Length ? _authors[nextAuthorIndex] : _authors[0]);

//            var group =
//              (nextGroupIndex < _groups.Length ? _groups[nextGroupIndex] : _groups[0]);

//            return new Feed
//            {
//                Id = id,
//                PostText = $"Some random post created for {group} by {author} right now. Have a great day!",
//                Created = DateTime.Now,
//                Author = author,
//                GroupName = group
//            };
//        }

//        public Task StartAsync(
//            CancellationToken cancellationToken)
//        {
//            _timer.Start();
//            return Task.CompletedTask;
//        }

//        public Task StopAsync(
//            CancellationToken cancellationToken)
//        {
//            _timer.Enabled = false;
//            _timer.Dispose();
//            return Task.CompletedTask;
//        }
//    }
//}
