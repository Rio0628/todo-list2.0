import axios from 'axios';

export const insertTask = payload => axios.post(`/api/task`, payload);
export const getAllTasks = () => axios.get(`/api/task`);
export const updateTaskById = (id, payload) => axios.put(`/api/task/${id}`, payload);
export const deleteTaskById = id => axios.delete(`/api/task/${id}`);

const apis = { insertTask, getAllTasks, updateTaskById, deleteTaskById };
export default apis;