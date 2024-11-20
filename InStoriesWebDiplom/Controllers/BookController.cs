using Microsoft.AspNetCore.Mvc;

namespace InStoriesWebDiplom.Controllers
{
    [ApiController]
    [Route("/book")]
    public class BookController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

    }
}
