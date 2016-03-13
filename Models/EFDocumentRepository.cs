using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace MyWebPlayground.Models
{
    public class EFDocumentRepository : IDocumentRepository
    {
        private ApplicationDbContext db { get; set; }

        private IQueryable<Document> items
        {
            get
            {
                return this.db.Documents.Include(x => x.Project);
            }
        }

        public EFDocumentRepository(ApplicationDbContext db)
        {
            this.db = db;
        }

        public Document Add(Document document)
        {
            if(document.Project != null && document.Project.Id == 0)
            {
                this.db.DocumentProjects.Add(document.Project);
            }

            var maxNumber = this.items
                            .Where(x => x.Project.Id == document.Project.Id)
                            .Max(x => x.Number);

            document.Number = maxNumber + 1;

            this.db.Documents.Add(document);
            this.db.SaveChanges();

            return document;
        }

        public Document Find(int id)
        {
            return this.db.Documents.FirstOrDefault(x=>x.Id==id);
        }

        public IEnumerable<Document> GetAll()
        {
            return this.items.ToArray();
        }

        public Document Remove(int id)
        {
            var item = this.db.Documents.First(x => x.Id == id);
            this.db.Documents.Remove(item);
            this.db.SaveChangesAsync();
            return item;
        }

        public Document Update(Document document)
        {
            document.Id = 0;
            return this.Add(document);
        }
    }
}
