using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebPlayground.Models
{
    public interface IDocumentRepository
    {
        Document Add(Document document);
        IEnumerable<Document> GetAll();
        Document Find(int id);
        Document Remove(int id);
        Document Update(Document document);
    }
}
