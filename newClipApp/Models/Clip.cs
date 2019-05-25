using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace newClipApp.Models
{
    [Table("clip")]
    public class Clip
    {
        [Key]
        public int ClipId { get; set; }
        public string Name { get; set; }
        public string Keywords { get; set; }
        public string Thumbnail { get; set;}
        public string FilePath { get; set; }
        private IFormFile _File;
        
        [NotMapped]
        public IFormFile File {
            get {
                return _File;
            }
            set {
                this._File = value;
            }
        }

    }


}
