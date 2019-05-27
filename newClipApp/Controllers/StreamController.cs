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
        private IClipRepository _clipRepository;

        public StreamController(IHostingEnvironment env, IClipRepository clipRepository)
        {
            _env = env;
            _clipRepository = clipRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Stream(int id)
        {
            var clip = _clipRepository.FindByCondition(x => x.ClipId.Equals(id)).FirstOrDefault();
            string path = Path.Combine(_env.ContentRootPath, clip.FilePath.Substring(1));
            return PhysicalFile(path, "application/octet-stream");
        }
    }
}
