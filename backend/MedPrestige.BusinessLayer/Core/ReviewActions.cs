using AutoMapper;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class ReviewActions : BaseActions<Review, ReviewDto>
    {
        protected readonly IReviewRepository _reviewRepository;

        protected ReviewActions(
            IReviewRepository reviewRepository,
            IMapper mapper) : base(mapper)
        {
            _reviewRepository = reviewRepository;
        }

        protected internal List<ReviewDto> ExecuteGetAll()
        {
            return MapToDtoList(_reviewRepository.GetAll());
        }

        protected internal ReviewDto ExecuteGetById(int id)
        {
            return MapToDto(_reviewRepository.GetById(id));
        }

        protected internal List<ReviewDto> ExecuteGetByDoctorId(int doctorId)
        {
            return MapToDtoList(_reviewRepository.GetByDoctorId(doctorId));
        }

        protected internal List<ReviewDto> ExecuteGetByUserId(int userId)
        {
            return MapToDtoList(_reviewRepository.GetByUserId(userId));
        }

        protected internal int ExecuteAdd(ReviewDto dto)
        {
            var entity = new Review
            {
                UserId = dto.UserId,
                DoctorId = dto.DoctorId,
                Rating = dto.Rating,
                Comment = dto.Comment,
                CreatedAt = DateTime.UtcNow
            };

            _reviewRepository.Add(entity);
            return entity.ReviewId;
        }

        protected internal bool ExecuteUpdate(ReviewDto dto)
        {
            var entity = _reviewRepository.GetById(dto.ReviewId);
            if (entity == null) return false;

            entity.Rating = dto.Rating;
            entity.Comment = dto.Comment;

            _reviewRepository.Update(entity);
            return true;
        }

        protected internal void ExecuteDelete(int id)
        {
            _reviewRepository.Delete(id);
        }
    }
}
