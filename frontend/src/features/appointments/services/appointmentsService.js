import { api } from "@/lib/api";

export const appointmentsService = {
  getAll: () => api.get("/api/admin/appointments"),

  getByDoctor: (doctorId) => api.get(`/api/admin/appointments/doctor/${doctorId}`),

  getByPatient: (patientId) =>
    api.get(`/api/appointments/patient/${patientId}`),

  create: (body) => api.post("/api/admin/appointments", body),

  update: (id, body) => api.put(`/api/admin/appointments/${id}`, body),

  remove: (id) => api.del(`/api/admin/appointments/${id}`),

  updateStatus: (appointment, newStatus) =>
    api.put(`/api/admin/appointments/${appointment.AppointmentId}`, {
      ...appointment,
      Status: newStatus,
    }),
};
