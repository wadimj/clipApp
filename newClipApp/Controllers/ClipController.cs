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
    public class ClipController : Controller
    {
        private IClipRepository _clipRepository;

        public ClipController( IClipRepository clipRepository)
        {
            _clipRepository = clipRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var clips = _clipRepository.FindAll();
            return Ok(clips);
        }

        [HttpGet("{id}")]
        public IActionResult Clip(int id)
        {
            var clip = _clipRepository.FindByCondition(x => x.ClipId.Equals(id));
            return Ok(clip);
        }

        [HttpGet("search/{searchString}")]
        public IActionResult Search(string searchString)
        {
            var clips = _clipRepository.FindByCondition(x => x.Name.Contains(searchString));
            return Ok(clips);
        }

        [HttpPost]
        public IActionResult Edit(Clip clipModel)
        {
            if(ModelState.IsValid){
              _clipRepository.Update(clipModel);
              _clipRepository.Save();
              return Ok(clipModel);
            }
            return ValidationProblem();
        }
    }
}
