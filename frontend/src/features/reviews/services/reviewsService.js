import { api } from '@/lib/api';

export const reviewsService = {
    getAll: () => api.get('/api/reviews'),
    getById: (id) => api.get(`/api/reviews/${id}`),
    getByDoctor: (doctorId) => api.get(`/api/reviews/doctor/${doctorId}`),
    getByUser: (userId) => api.get(`/api/reviews/user/${userId}`),
    add: (dto) => api.post('/api/reviews', dto),
    update: (id, dto) => api.put(`/api/reviews/${id}`, dto),
    delete: (id) => api.del(`/api/reviews/${id}`),
};
