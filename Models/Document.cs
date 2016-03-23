using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyWebPlayground.Models
{

    public class DocumentCssLibrary
    {
        [Required(), Key(), DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string CssLibrary { get; set; }

        public virtual Document Document { get; set; }
    }

    public class DocumentJavascriptLibrary
    {
        [Required(), Key(), DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string JavascriptLibrary { get; set; }

        public virtual Document Document { get; set; }
    }

    public class Document
    {
        [Required(), Key(), DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
        public string MarkupChoice { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string StyleChoice { get; set; }

        [Required(AllowEmptyStrings = true)]
        public virtual ICollection<DocumentCssLibrary> CssLibraries { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string ScriptChoice { get; set; }

        [Required(AllowEmptyStrings = true)]
        public virtual ICollection<DocumentJavascriptLibrary> JavascriptLibraries { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Title { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Description { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Author { get; set; }
    }
    
}
