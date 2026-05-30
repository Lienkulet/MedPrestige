using AutoMapper;
using MedPrestige.BusinessLayer.Core;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;

namespace MedPrestige.BusinessLayer.Structure
{
    public class UserAction : UserActions, IUserAction
    {
        public UserAction(IUserRepository userRepository, IMapper mapper) : base(userRepository, mapper) { }

        public List<UserDto> GetAll()           => ExecuteGetAll();
        public UserDto GetById(int id)          => ExecuteGetById(id);
        public UserDto GetByEmail(string email) => ExecuteGetByEmail(email);
        public UserDto Login(string email, string password) => ExecuteLogin(email, password);
        public void Add(UserDto dto, string password) => ExecuteAdd(dto, password);
        public void Update(UserDto dto)         => ExecuteUpdate(dto);
        public void Delete(int id)              => ExecuteDelete(id);
    }
}
