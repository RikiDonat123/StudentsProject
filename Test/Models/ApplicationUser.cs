﻿using Microsoft.AspNetCore.Identity;

namespace Test.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}