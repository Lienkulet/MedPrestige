using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Interfaces
{
    public interface IUserAction
    {
        List<UserDto> GetAll();
        UserDto GetById(int id);
        UserDto GetByEmail(string email);
        UserDto Login(string email, string password);
        void Add(UserDto dto, string password);
        void Update(UserDto dto);
        void Delete(int id);
    }
}
