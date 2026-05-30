using AutoMapper;

namespace MedPrestige.BusinessLayer.Core
{
    public abstract class BaseActions<TEntity, TDto>
    {
        protected readonly IMapper _mapper;

        protected BaseActions(IMapper mapper)
        {
            _mapper = mapper;
        }

        protected TDto MapToDto(TEntity entity)
        {
            return _mapper.Map<TDto>(entity);
        }

        protected List<TDto> MapToDtoList(List<TEntity> entities)
        {
            return _mapper.Map<List<TDto>>(entities);
        }
    }
}
