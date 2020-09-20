import axios from 'axios';

export const apiUrl = 'http://localhost:4000';

export const axiosClient = () => {
  return axios.create({
    baseURL: `${apiUrl}/`,
    withCredentials: true
  });
};
