using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
    public class UploadController : Controller
    {
        private readonly IHostingEnvironment _env;

        public UploadController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpPost("[action]")]
        [RequestFormLimits(MultipartBodyLengthLimit = 209715200)]
        [RequestSizeLimit(209715200)]
        public async Task<IActionResult> Video(FileUploadViewModel model) {
            var file = model.File;

            if (file.Length > 0) {
                string path = Path.Combine(_env.ContentRootPath, "uploads");
                //TODO - check if file with same name already exists
                using (var fs = new FileStream(Path.Combine(path, file.FileName), FileMode.Create))
                {
                        await file.CopyToAsync(fs);
                }

                model.Source = $"/uploads/{file.FileName}";
                model.Extension = Path.GetExtension(file.FileName).Substring(1);
            }
            return BadRequest();
        }
    }
}
