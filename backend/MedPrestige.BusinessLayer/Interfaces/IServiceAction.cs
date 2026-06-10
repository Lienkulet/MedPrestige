using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Interfaces
{
    public interface IServiceAction
    {
        List<ServiceDto> GetAll();
        ServiceDto GetById(int id);
        List<ServiceDto> GetByStatus(string status);
        void Add(ServiceDto dto);
        void Update(ServiceDto dto);
        void Delete(int id);
    }
}
