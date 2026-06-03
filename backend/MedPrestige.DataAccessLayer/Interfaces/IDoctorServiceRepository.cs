using MedPrestige.Domain.Entities;

namespace MedPrestige.DataAccessLayer.Interfaces
{
    public interface IDoctorServiceRepository
    {
        List<DoctorService> GetByDoctorId(int doctorId);
        List<DoctorService> GetByServiceId(int serviceId);
        void Add(DoctorService doctorService);
        void Delete(int id);
        void DeleteByDoctorId(int doctorId);
    }
}
