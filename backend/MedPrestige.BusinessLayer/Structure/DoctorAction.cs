using AutoMapper;
using MedPrestige.BusinessLayer.Core;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Structure
{
    public class DoctorAction : DoctorActions, IDoctorAction
    {
        public DoctorAction(
            IDoctorRepository doctorRepository,
            IDoctorServiceRepository doctorServiceRepository,
            IDoctorDetailRepository doctorDetailRepository,
            IUserRepository userRepository,
            IMapper mapper) : base(doctorRepository, doctorServiceRepository, doctorDetailRepository, userRepository, mapper) { }

        public List<DoctorDto> GetAll()                         => ExecuteGetAll();
        public DoctorDto GetById(int id)                        => ExecuteGetById(id);
        public List<DoctorDto> GetByStatus(string status)       => ExecuteGetByStatus(status);
        public List<DoctorDto> GetByServiceId(int serviceId)    => ExecuteGetByServiceId(serviceId);
        public void Add(DoctorDto dto)                          => ExecuteAdd(dto);
        public void Update(DoctorDto dto)                       => ExecuteUpdate(dto);
        public void Delete(int id)                              => ExecuteDelete(id);
    }
}
