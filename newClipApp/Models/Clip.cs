using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace newClipApp.Models
{
    [Table("clip")]
    public class Clip
    {
        public Clip(int clipId, string name, string keywords, string thumbnail, string filePath){
            ClipId = clipId;
            Name = name;
            Keywords = keywords;
            Thumbnail = thumbnail;
            FilePath = filePath;
            _File = new FileUploadViewModel();
        }

        [Key]
        public int ClipId { get; set; }
        public string Name { get; set; }
        public string Keywords { get; set; }
        public string Thumbnail { get; set;}
        public string FilePath { get; set; }
        private FileUploadViewModel _File;
        
        [NotMapped]
        public FileUploadViewModel File {
            get {
                return _File;
            }
        }

    }


}
