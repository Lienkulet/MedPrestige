using AutoMapper;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class ServiceActions : BaseActions<Service, ServiceDto>
    {
        protected readonly IServiceRepository _serviceRepository;

        protected ServiceActions(IServiceRepository serviceRepository, IMapper mapper) : base(mapper)
        {
            _serviceRepository = serviceRepository;
        }

        protected internal List<ServiceDto> ExecuteGetAll()
        {
            return MapToDtoList(_serviceRepository.GetAll());
        }

        protected internal ServiceDto ExecuteGetById(int id)
        {
            return MapToDto(_serviceRepository.GetById(id));
        }

        protected internal List<ServiceDto> ExecuteGetByStatus(string status)
        {
            return MapToDtoList(_serviceRepository.GetByStatus(status));
        }

        protected internal void ExecuteAdd(ServiceDto dto)
        {
            var service = new Service
            {
                Name = dto.Name,
                Description = dto.Description,
                Duration = dto.Duration,
                Price = dto.Price,
                Image = dto.Image,
                Status = dto.Status
            };

            _serviceRepository.Add(service);
        }

        protected internal void ExecuteUpdate(ServiceDto dto)
        {
            var service = _serviceRepository.GetById(dto.ServiceId);
            if (service == null) return;

            service.Name = dto.Name;
            service.Description = dto.Description;
            service.Duration = dto.Duration;
            service.Price = dto.Price;
            service.Image = dto.Image;
            service.Status = dto.Status;

            _serviceRepository.Update(service);
        }

        protected internal void ExecuteDelete(int id)
        {
            _serviceRepository.Delete(id);
        }
    }
}
