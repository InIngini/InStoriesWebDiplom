using Microsoft.AspNetCore.Mvc;

namespace InStoriesWebDiplom.Controllers
{
    [ApiController]
    [Route("/functionbook")]
    public class FunctionBookController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

    }
}
