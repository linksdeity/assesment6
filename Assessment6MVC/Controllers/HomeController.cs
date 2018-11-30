using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Assessment6MVC.Models;

namespace Assessment6MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }




        public ActionResult Register()
        {
            return View();
        }




        public ActionResult Dish()
        {
            return View();
        }



        public ActionResult Confirmation(User user)
        {
            return View(user);
        }



        public ActionResult DishConfirmation(DishUser user)
        {
            return View(user);
        }

    }
}