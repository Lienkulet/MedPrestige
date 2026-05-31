using AutoMapper;
using MedPrestige.BusinessLayer.Helpers;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class DoctorActions : BaseActions<Doctor, DoctorDto>
    {
        protected readonly IDoctorRepository _doctorRepository;
        protected readonly IDoctorServiceRepository _doctorServiceRepository;
        protected readonly IDoctorDetailRepository _doctorDetailRepository;
        protected readonly IUserRepository _userRepository;

        protected DoctorActions(
            IDoctorRepository doctorRepository,
            IDoctorServiceRepository doctorServiceRepository,
            IDoctorDetailRepository doctorDetailRepository,
            IUserRepository userRepository,
            IMapper mapper) : base(mapper)
        {
            _doctorRepository = doctorRepository;
            _doctorServiceRepository = doctorServiceRepository;
            _doctorDetailRepository = doctorDetailRepository;
            _userRepository = userRepository;
        }

        private void SaveDetails(int doctorId, DoctorDto dto)
        {
            _doctorDetailRepository.DeleteByDoctorId(doctorId);
            if (!string.IsNullOrWhiteSpace(dto.WorkingHours))
                _doctorDetailRepository.Add(new DoctorDetail { DoctorId = doctorId, Type = "working_hours", Value = dto.WorkingHours });
            if (!string.IsNullOrWhiteSpace(dto.Qualifications))
                _doctorDetailRepository.Add(new DoctorDetail { DoctorId = doctorId, Type = "qualifications", Value = dto.Qualifications });
            if (dto.Details != null)
            {
                foreach (var d in dto.Details.Where(d => d.Type != "working_hours" && d.Type != "qualifications" && !string.IsNullOrWhiteSpace(d.Value)))
                    _doctorDetailRepository.Add(new DoctorDetail { DoctorId = doctorId, Type = d.Type, Value = d.Value });
            }
        }

        protected internal List<DoctorDto> ExecuteGetAll()
        {
            return MapToDtoList(_doctorRepository.GetAll());
        }

        protected internal DoctorDto ExecuteGetById(int id)
        {
            return MapToDto(_doctorRepository.GetById(id));
        }

        protected internal List<DoctorDto> ExecuteGetByStatus(string status)
        {
            return MapToDtoList(_doctorRepository.GetByStatus(status));
        }

        protected internal List<DoctorDto> ExecuteGetByServiceId(int serviceId)
        {
            var doctorServices = _doctorServiceRepository.GetByServiceId(serviceId);
            var doctors = doctorServices
                .Where(ds => ds.Doctor != null)
                .Select(ds => ds.Doctor)
                .ToList();
            return MapToDtoList(doctors);
        }

        protected internal void ExecuteAdd(DoctorDto dto)
        {
            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Password = CryptoHelper.HashPassword(!string.IsNullOrWhiteSpace(dto.Password) ? dto.Password.Trim() : "changeme"),
                Status = "Active"
            };
            _userRepository.Add(user);

            var doctor = new Doctor
            {
                UserId = user.UserId,
                Occupation = dto.Occupation,
                Bio = dto.Bio,
                Location = dto.Location,
                Experience = dto.Experience,
                Status = dto.Status,
                Image = dto.Image
            };
            _doctorRepository.Add(doctor);

            if (dto.ServiceIds != null)
            {
                foreach (var serviceId in dto.ServiceIds)
                    _doctorServiceRepository.Add(new DoctorService { DoctorId = doctor.DoctorId, ServiceId = serviceId });
            }

            SaveDetails(doctor.DoctorId, dto);
        }

        protected internal void ExecuteUpdate(DoctorDto dto)
        {
            var doctor = _doctorRepository.GetById(dto.DoctorId);
            if (doctor == null) return;

            if (doctor.UserId.HasValue)
            {
                var user = _userRepository.GetById(doctor.UserId.Value);
                if (user != null)
                {
                    user.Name = dto.Name;
                    user.Email = dto.Email;
                    user.Phone = dto.Phone;
                    if (!string.IsNullOrWhiteSpace(dto.Password))
                        user.Password = CryptoHelper.HashPassword(dto.Password.Trim());
                    _userRepository.Update(user);
                }
            }
            else
            {
                var user = new User
                {
                    Name = dto.Name,
                    Email = dto.Email,
                    Phone = dto.Phone,
                    Password = CryptoHelper.HashPassword(!string.IsNullOrWhiteSpace(dto.Password) ? dto.Password.Trim() : "changeme"),
                    Status = "Active"
                };
                _userRepository.Add(user);
                doctor.UserId = user.UserId;
            }

            doctor.Occupation = dto.Occupation;
            doctor.Bio = dto.Bio;
            doctor.Location = dto.Location;
            doctor.Experience = dto.Experience;
            doctor.Status = dto.Status;
            doctor.Image = dto.Image;
            _doctorRepository.Update(doctor);

            if (dto.ServiceIds != null)
            {
                _doctorServiceRepository.DeleteByDoctorId(dto.DoctorId);
                foreach (var serviceId in dto.ServiceIds)
                    _doctorServiceRepository.Add(new DoctorService { DoctorId = dto.DoctorId, ServiceId = serviceId });
            }

            SaveDetails(dto.DoctorId, dto);
        }

        protected internal void ExecuteDelete(int id)
        {
            var doctor = _doctorRepository.GetById(id);
            if (doctor == null) return;

            _doctorServiceRepository.DeleteByDoctorId(id);
            _doctorDetailRepository.DeleteByDoctorId(id);
            _doctorRepository.Delete(id);

            if (doctor.UserId.HasValue)
                _userRepository.Delete(doctor.UserId.Value);
        }
    }
}
