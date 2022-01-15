import axios from 'axios';

const api = axios.create({ baseURL: `http://localhost:3000`, });

/* http://localhost:3000/api => API baseURL for dev  */

export const insertTask = payload => api.post(`/api/task`, payload);
export const getAllTasks = () => api.get(`/api/tasks`);
export const updateTaskById = (id, payload) => api.put(`/api/task/${id}`, payload);
export const deleteTaskById = id => api.delete(`/api/task/${id}`);

const apis = { insertTask, getAllTasks, updateTaskById, deleteTaskById };
export default apis;