using AutoMapper;
using MedPrestige.BusinessLayer.Core;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Structure
{
    public class PatientAction : PatientActions, IPatientAction
    {
        public PatientAction(IPatientRepository patientRepository, IMapper mapper) : base(patientRepository, mapper) { }

        public List<PatientDto> GetAll()              => ExecuteGetAll();
        public PatientDto GetById(int id)             => ExecuteGetById(id);
        public PatientDto GetByUserId(int userId)     => ExecuteGetByUserId(userId);
        public void Add(PatientDto dto)               => ExecuteAdd(dto);
        public void Update(PatientDto dto)            => ExecuteUpdate(dto);
        public void Delete(int id)                    => ExecuteDelete(id);
    }
}
