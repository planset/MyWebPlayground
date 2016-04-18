using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace MyWebPlayground.Models
{
    public class EfDocumentRepository : IDocumentRepository
    {
        private ApplicationDbContext Db { get; set; }

        private IQueryable<Document> Items
        {
            get
            {
                return this.Db.Documents.Include(p=>p.CssLibraries).Include(p=>p.JavascriptLibraries);
            }
        }

        public EfDocumentRepository(ApplicationDbContext db)
        {
            this.Db = db;
        }

        public Document Add(Document document)
        {
            this.Db.Documents.Add(document);
            this.Db.SaveChanges();

            return document;
        }

        public Document Find(int id)
        {
            return this.Items.FirstOrDefault(x=>x.Id==id);
        }

        public IEnumerable<Document> GetAll()
        {
            return this.Items.ToArray();
        }

        public Document Remove(int id)
        {
            var item = this.Db.Documents.First(x => x.Id == id);
            this.Db.Documents.Remove(item);
            this.Db.SaveChangesAsync();
            return item;
        }

        public Document Update(Document document)
        {
            document.Id = 0;
            return this.Add(document);
        }
    }
}
