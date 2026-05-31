import { api } from "@/lib/api";

export const doctorsService = {
  getAll: () => api.get("/api/admin/doctors"),

  getById: (id) => api.get(`/api/admin/doctors/${id}`),

  getPublic: () => api.get("/api/doctors"),

  getPublicById: (id) => api.get(`/api/doctors/${id}`),

  create: (body) => api.post("/api/admin/doctors", body),

  update: (id, body) => api.put(`/api/admin/doctors/${id}`, body),

  remove: (id) => api.del(`/api/admin/doctors/${id}`),
};
