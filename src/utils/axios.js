import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Toast } from 'vant';
import config from '@/config';

const Axios = axios.create({
  baseURL: config.baseURL,
  timeout: 20000
});

NProgress.configure({
  showSpinner: false
});

Axios.interceptors.request.use(
  config => {
    NProgress.start();
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => {
    NProgress.done();
    if (response.status !== 200) {
      Toast(response.data.message);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  error => {
    Toast('系统异常');
    return Promise.reject(error);
  }
);

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    Axios.get(url, { params }).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    Axios.post(url, data).then(
      response => {
        resolve(response);
      },
      err => {
        reject(err);
      }
    );
  });
};

export const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    Axios.put(url, data).then(
      response => {
        resolve(response);
      },
      err => {
        reject(err);
      }
    );
  });
};
