using MedPrestige.Domain.Entities;

namespace MedPrestige.DataAccessLayer.Interfaces
{
    public interface IReviewRepository
    {
        List<Review> GetAll();
        Review GetById(int id);
        List<Review> GetByDoctorId(int doctorId);
        List<Review> GetByUserId(int userId);
        void Add(Review review);
        void Update(Review review);
        void Delete(int id);
    }
}
