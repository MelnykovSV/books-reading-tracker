import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';
export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
