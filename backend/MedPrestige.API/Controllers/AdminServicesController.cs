using MedPrestige.BusinessLayer;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.Api.Controllers.Admin
{
    [ApiController]
    [Route("api/admin/services")]
    public class AdminServicesController : ControllerBase
    {
        private readonly BusinessLogic _bl;

        public AdminServicesController(BusinessLogic bl)
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

        [HttpPost]
        public IActionResult Create([FromBody] ServiceDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _bl.ServiceAction().Add(dto);
            return Ok(new { message = "Serviciu adăugat." });
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] ServiceDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            dto.ServiceId = id;
            _bl.ServiceAction().Update(dto);
            return Ok(new { message = "Serviciu actualizat." });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bl.ServiceAction().Delete(id);
            return Ok(new { message = "Serviciu șters." });
        }
    }
}
