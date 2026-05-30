using AutoMapper;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class AppointmentActions : BaseActions<Appointment, AppointmentDto>
    {
        protected readonly IAppointmentRepository _appointmentRepository;

        protected AppointmentActions(IAppointmentRepository appointmentRepository, IMapper mapper) : base(mapper)
        {
            _appointmentRepository = appointmentRepository;
        }

        protected internal List<AppointmentDto> ExecuteGetAll()
        {
            return MapToDtoList(_appointmentRepository.GetAll());
        }

        protected internal AppointmentDto ExecuteGetById(int id)
        {
            return MapToDto(_appointmentRepository.GetById(id));
        }

        protected internal List<AppointmentDto> ExecuteGetByDoctorId(int doctorId)
        {
            return MapToDtoList(_appointmentRepository.GetByDoctorId(doctorId));
        }

        protected internal List<AppointmentDto> ExecuteGetByPatientId(int patientId)
        {
            return MapToDtoList(_appointmentRepository.GetByPatientId(patientId));
        }

        protected internal List<AppointmentDto> ExecuteGetByStatus(string status)
        {
            return MapToDtoList(_appointmentRepository.GetByStatus(status));
        }

        protected internal void ExecuteAdd(AppointmentDto dto)
        {
            var appointment = new Appointment
            {
                PatientId = dto.PatientId,
                DoctorId = dto.DoctorId,
                ServiceId = dto.ServiceId,
                StartAt = dto.StartAt,
                EndAt = dto.EndAt,
                Status = dto.Status
            };

            _appointmentRepository.Add(appointment);
        }

        protected internal void ExecuteUpdate(AppointmentDto dto)
        {
            var appointment = _appointmentRepository.GetById(dto.AppointmentId);
            if (appointment == null) return;

            appointment.PatientId = dto.PatientId;
            appointment.DoctorId = dto.DoctorId;
            appointment.ServiceId = dto.ServiceId;
            appointment.StartAt = dto.StartAt;
            appointment.EndAt = dto.EndAt;
            appointment.Status = dto.Status;

            _appointmentRepository.Update(appointment);
        }

        protected internal void ExecuteDelete(int id)
        {
            _appointmentRepository.Delete(id);
        }
    }
}
