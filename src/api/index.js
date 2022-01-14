import axios from 'axios';

const api = axios.create({ baseURL: `https://todo-list-mario-domenech.herokuapp.com/api`, });

/* http://localhost:3000/api => API baseURL for dev  */

export const insertTask = payload => api.post(`/task`, payload);
export const getAllTasks = () => api.get(`/tasks`);
export const updateTaskById = (id, payload) => api.put(`/task/${id}`, payload);
export const deleteTaskById = id => api.delete(`/task/${id}`);

const apis = { insertTask, getAllTasks, updateTaskById, deleteTaskById };
export default apis;

console.log(process.env.REACT_APP_PORT)