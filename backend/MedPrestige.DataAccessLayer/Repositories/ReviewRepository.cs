using MedPrestige.DataAccessLayer.Context;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MedPrestige.DataAccessLayer.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly AppDbContext _context;

        public ReviewRepository(AppDbContext context)
        {
            _context = context;
        }

        public List<Review> GetAll()
        {
            return _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Doctor)
                    .ThenInclude(d => d.User)
                .ToList();
        }

        public Review GetById(int id)
        {
            return _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Doctor)
                    .ThenInclude(d => d.User)
                .FirstOrDefault(r => r.ReviewId == id);
        }

        public List<Review> GetByDoctorId(int doctorId)
        {
            return _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Doctor)
                    .ThenInclude(d => d.User)
                .Where(r => r.DoctorId == doctorId)
                .ToList();
        }

        public List<Review> GetByUserId(int userId)
        {
            return _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Doctor)
                    .ThenInclude(d => d.User)
                .Where(r => r.UserId == userId)
                .ToList();
        }

        public void Add(Review review)
        {
            _context.Reviews.Add(review);
            _context.SaveChanges();
        }

        public void Update(Review review)
        {
            _context.Reviews.Update(review);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var review = _context.Reviews.Find(id);
            if (review != null)
            {
                _context.Reviews.Remove(review);
                _context.SaveChanges();
            }
        }
    }
}
