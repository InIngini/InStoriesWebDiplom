using Microsoft.AspNetCore.Mvc;

namespace InStoriesWebDiplom.Controllers
{
    [ApiController]
    [Route("/login")]
    public class AuthController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

    }
}
