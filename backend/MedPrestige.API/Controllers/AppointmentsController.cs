using MedPrestige.BusinessLayer;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.Api.Controllers
{
    [ApiController]
    [Route("api/appointments")]
    public class AppointmentsController : ControllerBase
    {
        private readonly BusinessLogic _bl;

        public AppointmentsController(BusinessLogic bl)
        {
            _bl = bl;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_bl.AppointmentAction().GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var appointment = _bl.AppointmentAction().GetById(id);
            if (appointment == null) return NotFound();
            return Ok(appointment);
        }

        [HttpGet("doctor/{doctorId}")]
        public IActionResult GetByDoctor(int doctorId)
        {
            return Ok(_bl.AppointmentAction().GetByDoctorId(doctorId));
        }

        [HttpGet("patient/{patientId}")]
        public IActionResult GetByPatient(int patientId)
        {
            return Ok(_bl.AppointmentAction().GetByPatientId(patientId));
        }

        [HttpPost]
        public IActionResult Create([FromBody] AppointmentDto dto)
        {
            _bl.AppointmentAction().Add(dto);
            return Ok(new { message = "Appointment created." });
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] AppointmentDto dto)
        {
            var existing = _bl.AppointmentAction().GetById(id);
            if (existing == null) return NotFound();
            dto.AppointmentId = id;
            _bl.AppointmentAction().Update(dto);
            return Ok(_bl.AppointmentAction().GetById(id));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existing = _bl.AppointmentAction().GetById(id);
            if (existing == null) return NotFound();
            _bl.AppointmentAction().Delete(id);
            return NoContent();
        }
    }
}
