using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Interfaces
{
    public interface IDoctorAction
    {
        List<DoctorDto> GetAll();
        DoctorDto GetById(int id);
        List<DoctorDto> GetByStatus(string status);
        List<DoctorDto> GetByServiceId(int serviceId);
        void Add(DoctorDto dto);
        void Update(DoctorDto dto);
        void Delete(int id);
    }
}
