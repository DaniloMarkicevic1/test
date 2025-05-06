import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { paths } from '@/config/paths';
import { config } from '@/config/config';

function authRequestInterceptor(axiosConfig: InternalAxiosRequestConfig) {
  if (axiosConfig.headers) {
    axiosConfig.headers.Accept = 'application/json';
  }

  const token = localStorage.getItem(config.authTokenName);

  if (!token) {
    window.location.href = '/auth/login';
  }

  return axiosConfig;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);
