using MedPrestige.BusinessLayer;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.Api.Controllers
{
    [ApiController]
    [Route("api/services")]
    public class ServicesController : ControllerBase
    {
        private readonly BusinessLogic _bl;

        public ServicesController(BusinessLogic bl)
        {
            _bl = bl;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_bl.ServiceAction().GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var service = _bl.ServiceAction().GetById(id);
            if (service == null) return NotFound();
            return Ok(service);
        }

        [HttpGet("{id}/doctors")]
        public IActionResult GetDoctors(int id)
        {
            return Ok(_bl.DoctorAction().GetByServiceId(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody] ServiceDto dto)
        {
            _bl.ServiceAction().Add(dto);
            var latest = _bl.ServiceAction().GetAll().OrderByDescending(s => s.ServiceId).First();
            return CreatedAtAction(nameof(GetById), new { id = latest.ServiceId }, latest);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] ServiceDto dto)
        {
            var existing = _bl.ServiceAction().GetById(id);
            if (existing == null) return NotFound();
            dto.ServiceId = id;
            _bl.ServiceAction().Update(dto);
            return Ok(_bl.ServiceAction().GetById(id));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existing = _bl.ServiceAction().GetById(id);
            if (existing == null) return NotFound();
            _bl.ServiceAction().Delete(id);
            return NoContent();
        }
    }
}
