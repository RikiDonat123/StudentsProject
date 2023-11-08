using Microsoft.AspNetCore.Mvc;
using Test.Models;

namespace Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private List<Student> _students = new List<Student> { 
            new Student { 
                FullName= "Rachel Cohen",
                ID= "123456789",
                PhoneNumber = "0585858778"
            },
            new Student {
                FullName= "Tamar Levi",
                ID= "7778787877",
                PhoneNumber = "0544446989"
            },
            new Student {
                FullName= "Yael Cohen",
                ID= "998878588",
                PhoneNumber = "0556565666"
            }
        };

        [HttpGet]
        public List<Student> Get()
        {
            return _students;
        }

        [HttpGet]
        [Route("search")]
        public List<Student> Search(string text)
        {
            return _students.FindAll(item => item.ID.Contains(text) || item.FullName.Contains(text));
        }
    }
}
