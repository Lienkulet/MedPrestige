using MedPrestige.Domain.Entities;

namespace MedPrestige.DataAccessLayer.Interfaces
{
    public interface IDoctorRepository
    {
        List<Doctor> GetAll();
        Doctor GetById(int id);
        Doctor GetByUserId(int userId);
        List<Doctor> GetByStatus(string status);
        void Add(Doctor doctor);
        void Update(Doctor doctor);
        void Delete(int id);
    }
}
