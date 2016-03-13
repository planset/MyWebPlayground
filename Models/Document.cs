using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyWebPlayground.Models
{

    public class Document
    {
        public int Id { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Html { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string HtmlMode { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Css { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string CssMode { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Javascript { get; set; }
        
        [Required(AllowEmptyStrings = true)]
        public string JavascriptMode { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Title { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Description { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Author { get; set; }
    }
    
}
