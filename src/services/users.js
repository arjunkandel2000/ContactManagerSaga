// import api from 'api';
import { api } from './index';

export const requestGetUser = () => api.get('/users');

export const requestDeleteUser = (payload) => api.delete(`/users/${payload}`);

export const requestAddUser = (payload) => api.post('/users', payload);

export const requestUser = (payload) => api.get(`/users/${payload}`);

export const requestUpdateUser = (payload) => api.put(`/users/${payload.id}`, payload);
