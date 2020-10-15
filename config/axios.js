import axios from 'axios';

//export const apiUrl = 'http://localhost:4000';
export const apiUrl = 'https://petgram.alvlinarez.dev/petgram-server';

export const axiosClient = () => {
  return axios.create({
    baseURL: `${apiUrl}/`,
    withCredentials: true
  });
};
