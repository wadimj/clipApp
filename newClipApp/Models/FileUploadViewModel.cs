using Microsoft.AspNetCore.Http;

namespace newClipApp.Models
{
    public class FileUploadViewModel
    {
        public IFormFile File { get; set; }
        public string Source { get; set; }
        public string Extension { get; set; }
    }
}