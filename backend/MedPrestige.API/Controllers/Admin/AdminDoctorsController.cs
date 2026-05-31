using MedPrestige.BusinessLayer;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.Api.Controllers.Admin
{
    [ApiController]
    [Route("api/admin/doctors")]
    public class AdminDoctorsController : ControllerBase
    {
        private readonly BusinessLogic _bl;

        public AdminDoctorsController(BusinessLogic bl)
        {
            _bl = bl;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_bl.DoctorAction().GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var doctor = _bl.DoctorAction().GetById(id);
            if (doctor == null) return NotFound();
            return Ok(doctor);
        }

        [HttpPost]
        public IActionResult Create([FromBody] DoctorDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _bl.DoctorAction().Add(dto);
            return Ok(new { message = "Doctor adăugat." });
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] DoctorDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            dto.DoctorId = id;
            _bl.DoctorAction().Update(dto);
            return Ok(new { message = "Doctor actualizat." });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bl.DoctorAction().Delete(id);
            return Ok(new { message = "Doctor șters." });
        }
    }
}
