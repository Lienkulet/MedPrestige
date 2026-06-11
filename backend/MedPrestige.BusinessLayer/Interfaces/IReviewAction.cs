using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Interfaces
{
    public interface IReviewAction
    {
        List<ReviewDto> GetAll();
        ReviewDto GetById(int id);
        List<ReviewDto> GetByDoctorId(int doctorId);
        List<ReviewDto> GetByUserId(int userId);
        int Add(ReviewDto dto);
        bool Update(ReviewDto dto);
        void Delete(int id);
    }
}
