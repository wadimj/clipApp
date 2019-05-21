using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using newClipApp.Models;

namespace newClipApp.Controllers
{
    [Route("api/[controller]")]
    public class StreamController : Controller
    {
        private readonly IHostingEnvironment _env;

        public StreamController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpGet]
        public IActionResult Stream()
        {
            string uploadDir = Path.Combine(_env.ContentRootPath, "uploads");
            var path = Path.Combine(uploadDir, "sample.mp4");
            return PhysicalFile(path, "application/octet-stream");
        }
    }
}
