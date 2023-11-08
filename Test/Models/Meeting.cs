namespace Test.Models
{
    public class Meeting
    {
        public int MeetingId { get; set; }
        public string StudentID { get; set; }
        public DateTime? MeetingDate { get; set; }
        public string Subject { get; set; }
        public string Details { get; set; }
        public DateTime? NextMeeting { get; set; }
    }
}
