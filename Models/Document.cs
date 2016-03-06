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
        public string Title { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Description { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string Settings { get; set; }

        public virtual IEnumerable<DocumentVersion> Versions { get; set; }
    }

    public class DocumentVersion
    {
        public int Id { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string html { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string css { get; set; }

        [Required(AllowEmptyStrings = true)]
        public string javascript { get; set; }
    }

    public interface IOperationLoggedEntity
    {
        ApplicationUser CreatedBy { get; set; }
        DateTime CreatedAt { get; set; }

        ApplicationUser UpdatedBy { get; set; }
        DateTime UpdatedAt { get; set; }
    }

    public class BaseEntity: IOperationLoggedEntity
    {
        public virtual ApplicationUser CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }

        public virtual ApplicationUser UpdatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
    
}
