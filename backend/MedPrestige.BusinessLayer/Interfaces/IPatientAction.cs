using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Interfaces
{
    public interface IPatientAction
    {
        List<PatientDto> GetAll();
        PatientDto GetById(int id);
        PatientDto GetByUserId(int userId);
        void Add(PatientDto dto);
        void Update(PatientDto dto);
        void Delete(int id);
    }
}
