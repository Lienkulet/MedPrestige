using AutoMapper;
using MedPrestige.BusinessLayer.Core;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Structure
{
    public class ServiceAction : ServiceActions, IServiceAction
    {
        public ServiceAction(IServiceRepository serviceRepository, IMapper mapper) : base(serviceRepository, mapper) { }

        public List<ServiceDto> GetAll()                => ExecuteGetAll();
        public ServiceDto GetById(int id)               => ExecuteGetById(id);
        public List<ServiceDto> GetByStatus(string status) => ExecuteGetByStatus(status);
        public void Add(ServiceDto dto)                 => ExecuteAdd(dto);
        public void Update(ServiceDto dto)              => ExecuteUpdate(dto);
        public void Delete(int id)                      => ExecuteDelete(id);
    }
}
