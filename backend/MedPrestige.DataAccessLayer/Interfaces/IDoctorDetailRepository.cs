using MedPrestige.Domain.Entities;

namespace MedPrestige.DataAccessLayer.Interfaces
{
    public interface IDoctorDetailRepository
    {
        List<DoctorDetail> GetByDoctorId(int doctorId);
        void Add(DoctorDetail detail);
        void Delete(int id);
        void DeleteByDoctorId(int doctorId);
    }
}
