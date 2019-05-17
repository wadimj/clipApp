using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace newClipApp.Models
{
    public class Clip
    {
        public int ClipId { get; set; }
        public string Name { get; set; }
        public TimeSpan Length { get; set; }

    }
}
