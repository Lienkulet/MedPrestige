using AutoMapper;
using MedPrestige.BusinessLayer.Interfaces;
using MedPrestige.BusinessLayer.Structure;
using MedPrestige.DataAccessLayer.Interfaces;

namespace MedPrestige.BusinessLayer
{
    public class BusinessLogic
    {
        private readonly IUserRepository _userRepository;
        private readonly IPatientRepository _patientRepository;
        private readonly IDoctorRepository _doctorRepository;
        private readonly IDoctorServiceRepository _doctorServiceRepository;
        private readonly IDoctorDetailRepository _doctorDetailRepository;
        private readonly IServiceRepository _serviceRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IMapper _mapper;

        public BusinessLogic(
            IUserRepository userRepository,
            IPatientRepository patientRepository,
            IDoctorRepository doctorRepository,
            IDoctorServiceRepository doctorServiceRepository,
            IDoctorDetailRepository doctorDetailRepository,
            IServiceRepository serviceRepository,
            IAppointmentRepository appointmentRepository,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _patientRepository = patientRepository;
            _doctorRepository = doctorRepository;
            _doctorServiceRepository = doctorServiceRepository;
            _doctorDetailRepository = doctorDetailRepository;
            _serviceRepository = serviceRepository;
            _appointmentRepository = appointmentRepository;
            _mapper = mapper;
        }

        public IUserAction UserAction()               => new UserAction(_userRepository, _mapper);
        public IPatientAction PatientAction()         => new PatientAction(_patientRepository, _mapper);
        public IDoctorAction DoctorAction()           => new DoctorAction(_doctorRepository, _doctorServiceRepository, _doctorDetailRepository, _userRepository, _mapper);
        public IServiceAction ServiceAction()         => new ServiceAction(_serviceRepository, _mapper);
        public IAppointmentAction AppointmentAction() => new AppointmentAction(_appointmentRepository, _mapper);
    }
}
