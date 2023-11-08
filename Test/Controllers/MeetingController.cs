using Microsoft.AspNetCore.Mvc;
using Test.Models;

namespace Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeetingController : Controller
    {
        private List<Meeting> _meetings = new List<Meeting> {
            new Meeting {
                MeetingId = 1,
                StudentID = "123456789",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "Math"
            },
            new Meeting {
                MeetingId= 2,
                StudentID = "123456789",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "History"
            },
            new Meeting {
                MeetingId = 3,
                StudentID = "123456789",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "Math"
            },
            new Meeting {
                MeetingId = 4,
                StudentID = "7778787877",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "Math"
            },
            new Meeting {
                MeetingId = 5,
                StudentID = "7778787877",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "Math"
            },
            new Meeting {
                MeetingId = 6,
                StudentID = "7778787877",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "History"
            },
            new Meeting {
                MeetingId = 7,
                StudentID = "998878588",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "History"
            },
            new Meeting {
                MeetingId = 8,
                StudentID = "998878588",
                MeetingDate = new DateTime(),
                Details = "details",
                NextMeeting = new DateTime(2024, 12, 03),
                Subject = "Math"
            },
        };






        [HttpGet("{studentID}")]
        public List<Meeting> GetMeetingsByStudent(string studentID)
        {
            try
            {
                return _meetings.FindAll(item => item.StudentID == studentID);
            }

            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpPost]
        public Meeting AddMeeting([FromBody] Meeting meeting)
        {
            try
            {
                meeting.MeetingId = _meetings.Max(x => x.MeetingId) + 1;
                _meetings.Add(meeting);
                return meeting;
            }
            catch (Exception ex)
            {
                // write to log
                throw;
            }
        }

        [HttpPut]
        public void UpdateMeeting(Meeting meeting)
        {
            try
            {
                int index = _meetings.FindIndex(item => item.MeetingId == meeting.MeetingId);
                if (index >= 0)
                {
                    _meetings[index] = meeting;
                }
            }
            catch (Exception ex)
            {
                // write to log
                throw;
            }
        }

    }
}
