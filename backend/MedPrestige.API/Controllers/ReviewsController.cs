using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MedPrestige.API.Controllers
{
    [Route("api/reviews")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewAction _reviewAction;

        public ReviewsController(IReviewAction reviewAction)
        {
            _reviewAction = reviewAction;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_reviewAction.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var review = _reviewAction.GetById(id);
            if (review == null) return NotFound("Recenzia nu a fost gasita.");
            return Ok(review);
        }

        [HttpGet("doctor/{doctorId}")]
        public IActionResult GetByDoctor(int doctorId)
        {
            return Ok(_reviewAction.GetByDoctorId(doctorId));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetByUser(int userId)
        {
            return Ok(_reviewAction.GetByUserId(userId));
        }

        [HttpPost]
        [Authorize]
        public IActionResult Add([FromBody] ReviewDto dto)
        {
            if (dto == null) return BadRequest("Datele recenziei nu pot fi null.");
            if (dto.Rating < 1 || dto.Rating > 5) return BadRequest("Rating-ul trebuie sa fie intre 1 si 5.");

            var newId = _reviewAction.Add(dto);
            return CreatedAtAction(nameof(GetById), new { id = newId }, new { id = newId });
        }

        [HttpPut("{id}")]
        [Authorize]
        public IActionResult Update(int id, [FromBody] ReviewDto dto)
        {
            if (dto == null) return BadRequest("Datele recenziei nu pot fi null.");
            if (id != dto.ReviewId) return BadRequest("ID-ul nu corespunde.");
            if (dto.Rating < 1 || dto.Rating > 5) return BadRequest("Rating-ul trebuie sa fie intre 1 si 5.");

            var success = _reviewAction.Update(dto);
            if (!success) return NotFound("Recenzia nu a fost gasita.");

            return Ok(_reviewAction.GetById(id));
        }

        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(int id)
        {
            var review = _reviewAction.GetById(id);
            if (review == null) return NotFound("Recenzia nu a fost gasita.");

            _reviewAction.Delete(id);
            return NoContent();
        }
    }
}
