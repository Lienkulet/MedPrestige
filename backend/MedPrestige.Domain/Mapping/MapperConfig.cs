using AutoMapper;

namespace MedPrestige.Domain.Mapping
{
    public static class MapperConfig
    {
        public static void RegisterMappings(IMapperConfigurationExpression cfg)
        {
            cfg.AddProfile<MappingProfile>();
        }
    }
}
