using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

using MyWebPlayground.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyWebPlayground.Controllers
{


    [Route("api/[controller]")]
    public class DocumentsController : Controller
    {
    
        [FromServices]
        public IDocumentRepository Documents { get; set; }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Document> Get()
        {
            var items = this.Documents.GetAll();

            return items;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = this.Documents.Find(id);
            if(item == null)
            {
                return HttpNotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Document item)
        {
            if (item == null)
            {
                return HttpBadRequest();
            }
            this.Documents.Add(item);
            return CreatedAtRoute("Get", new { controller = "Documents", id = item.Id });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Document item)
        {
            if (item == null || item.Id != id)
            {
                return HttpBadRequest();
            }
            var document = this.Documents.Find(id);
            if (document == null)
            {
                return HttpNotFound();
            }

            this.Documents.Update(item);
            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this.Documents.Remove(id);
        }
    }
}
