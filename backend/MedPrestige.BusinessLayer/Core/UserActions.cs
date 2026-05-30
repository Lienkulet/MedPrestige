using AutoMapper;
using MedPrestige.BusinessLayer.Helpers;
using MedPrestige.DataAccessLayer.Interfaces;
using MedPrestige.Domain.Dtos;
using MedPrestige.Domain.Entities;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class UserActions : BaseActions<User, UserDto>
    {
        protected readonly IUserRepository _userRepository;

        protected UserActions(IUserRepository userRepository, IMapper mapper) : base(mapper)
        {
            _userRepository = userRepository;
        }

        protected internal List<UserDto> ExecuteGetAll()
        {
            return MapToDtoList(_userRepository.GetAll());
        }

        protected internal UserDto ExecuteGetById(int id)
        {
            return MapToDto(_userRepository.GetById(id));
        }

        protected internal UserDto ExecuteGetByEmail(string email)
        {
            return MapToDto(_userRepository.GetByEmail(email));
        }

        protected internal UserDto ExecuteLogin(string email, string password)
        {
            var user = _userRepository.GetByEmail(email);
            if (user == null || !CryptoHelper.VerifyPassword(password, user.Password))
                return null;

            return MapToDto(user);
        }

        protected internal void ExecuteAdd(UserDto dto, string password)
        {
            var user = new User
            {
                Email = dto.Email,
                Name = dto.Name,
                Phone = dto.Phone,
                Status = dto.Status,
                Password = CryptoHelper.HashPassword(password)
            };

            _userRepository.Add(user);
        }

        protected internal void ExecuteUpdate(UserDto dto)
        {
            var user = _userRepository.GetById(dto.UserId);
            if (user == null) return;

            user.Name = dto.Name;
            user.Email = dto.Email;
            user.Phone = dto.Phone;
            user.Status = dto.Status;

            _userRepository.Update(user);
        }

        protected internal void ExecuteDelete(int id)
        {
            _userRepository.Delete(id);
        }
    }
}
