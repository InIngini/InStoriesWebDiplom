using Microsoft.AspNetCore.Mvc;

namespace InStoriesWebDiplom.Controllers
{
    [ApiController]
    [Route("/character")]
    public class CharacterController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

    }
}
