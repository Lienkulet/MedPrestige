using MedPrestige.BusinessLayer;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.Api.Controllers
{
    [ApiController]
    [Route("api/doctors")]
    public class DoctorsController : ControllerBase
    {
        private readonly BusinessLogic _bl;

        public DoctorsController(BusinessLogic bl)
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
            _bl.UserAction().Add(new UserDto
            {
                Email = dto.Email,
                Name = dto.Name,
                Phone = dto.Phone,
                Status = "active"
            }, "Welcome1!");

            var createdUser = _bl.UserAction().GetByEmail(dto.Email);
            dto.UserId = createdUser.UserId;
            _bl.DoctorAction().Add(dto);

            var latest = _bl.DoctorAction().GetAll().OrderByDescending(d => d.DoctorId).First();
            return CreatedAtAction(nameof(GetById), new { id = latest.DoctorId }, latest);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] DoctorDto dto)
        {
            var existing = _bl.DoctorAction().GetById(id);
            if (existing == null) return NotFound();

            dto.DoctorId = id;
            _bl.DoctorAction().Update(dto);

            var userDto = new UserDto
            {
                UserId = existing.UserId ?? 0,
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Status = dto.Status
            };
            if (userDto.UserId > 0)
                _bl.UserAction().Update(userDto);

            return Ok(_bl.DoctorAction().GetById(id));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var doctor = _bl.DoctorAction().GetById(id);
            if (doctor == null) return NotFound();

            var userId = doctor.UserId;
            _bl.DoctorAction().Delete(id);
            if (userId.HasValue)
                _bl.UserAction().Delete(userId.Value);

            return NoContent();
        }
    }
}
