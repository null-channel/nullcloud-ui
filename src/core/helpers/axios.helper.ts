import axios from 'axios';
import type { App } from 'vue';
import { axiosInterceptor } from '@helpers';
import { BACKEND_BASE_URL } from '@constants';

const _axios = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
  install: (app: App) => {
    axiosInterceptor(_axios);
    app.config.globalProperties.$axios  = _axios ;
    window.$axios = app.config.globalProperties.$axios;
  },
};
