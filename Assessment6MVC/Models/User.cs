using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Assessment6MVC.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool Attending { get; set; }

        public bool Guest { get; set; }
        public string Date { get; set; }
    }
}