import { api } from "@/lib/api";

export const medicalServicesService = {
  getAll: () => api.get("/api/admin/services"),

  getPublic: () => api.get("/api/services"),

  getPublicById: (id) => api.get(`/api/services/${id}`),

  create: (body) => api.post("/api/admin/services", body),

  update: (id, body) => api.put(`/api/admin/services/${id}`, body),

  remove: (id) => api.del(`/api/admin/services/${id}`),
};
