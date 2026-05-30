using AutoMapper;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class PatientActions : BaseActions<Patient, PatientDto>
    {
        protected readonly IPatientRepository _patientRepository;

        protected PatientActions(IPatientRepository patientRepository, IMapper mapper) : base(mapper)
        {
            _patientRepository = patientRepository;
        }

        protected internal List<PatientDto> ExecuteGetAll()
        {
            return MapToDtoList(_patientRepository.GetAll());
        }

        protected internal PatientDto ExecuteGetById(int id)
        {
            return MapToDto(_patientRepository.GetById(id));
        }

        protected internal PatientDto ExecuteGetByUserId(int userId)
        {
            return MapToDto(_patientRepository.GetByUserId(userId));
        }

        protected internal void ExecuteAdd(PatientDto dto)
        {
            var patient = new Patient
            {
                UserId = dto.UserId,
                DateOfBirth = dto.DateOfBirth,
                Gender = dto.Gender,
                Address = dto.Address
            };

            _patientRepository.Add(patient);
        }

        protected internal void ExecuteUpdate(PatientDto dto)
        {
            var patient = _patientRepository.GetById(dto.PatientId);
            if (patient == null) return;

            patient.DateOfBirth = dto.DateOfBirth;
            patient.Gender = dto.Gender;
            patient.Address = dto.Address;

            _patientRepository.Update(patient);
        }

        protected internal void ExecuteDelete(int id)
        {
            _patientRepository.Delete(id);
        }
    }
}
