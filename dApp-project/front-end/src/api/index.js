import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5500/api', // 確認 baseURL 指向後端 API
});

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const addCourse = async (course) => {
  const response = await api.post('/courses', course);
  return response.data;
};

export const updateCourse = async (id, course) => {
  const response = await api.put(`/courses/${id}`, course);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};
