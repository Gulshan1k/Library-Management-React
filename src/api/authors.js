import api from './api';

export const AuthorsService = {
  getAll:  () => api.get('/api/Authors'),
  create: data => api.post('/api/Authors', data)
};
