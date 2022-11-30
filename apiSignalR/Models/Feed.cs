namespace apiSignalR.Models
{
    public class Feed
    {
        public string Id { get; set; }
        public string PostText { get; set; }
        public DateTime Created { get; set; }
        public string Author { get; set; }
        public string GroupName { get; set; }
    }
}
