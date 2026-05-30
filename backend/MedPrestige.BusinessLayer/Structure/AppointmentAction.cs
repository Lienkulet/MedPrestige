using AutoMapper;
using MedPrestige.BusinessLayer.Core;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Structure
{
    public class AppointmentAction : AppointmentActions, IAppointmentAction
    {
        public AppointmentAction(IAppointmentRepository appointmentRepository, IMapper mapper) : base(appointmentRepository, mapper) { }

        public List<AppointmentDto> GetAll()                        => ExecuteGetAll();
        public AppointmentDto GetById(int id)                       => ExecuteGetById(id);
        public List<AppointmentDto> GetByDoctorId(int doctorId)     => ExecuteGetByDoctorId(doctorId);
        public List<AppointmentDto> GetByPatientId(int patientId)   => ExecuteGetByPatientId(patientId);
        public List<AppointmentDto> GetByStatus(string status)      => ExecuteGetByStatus(status);
        public void Add(AppointmentDto dto)                         => ExecuteAdd(dto);
        public void Update(AppointmentDto dto)                      => ExecuteUpdate(dto);
        public void Delete(int id)                                  => ExecuteDelete(id);
    }
}
