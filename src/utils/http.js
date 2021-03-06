import axios from 'axios';
import { Loading } from 'element-ui';

const Axios = axios.create({
    baseURL: '/api',
    timeout: 20000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

Axios.interceptors.request.use(
    req => {
        startLoading();
        return req;
    },
    err => {
        return Promise.reject(err);
    }
);

Axios.interceptors.response.use(
    res => {
        endLoading();
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

export const get = (url, params = {}) => {
    return new Promise ((resolve, reject) => {
        Axios.get(url, { params }).then((res) => {
            resolve(res);
        }, err => {
            reject(err);
        })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        Axios.post(url, data).then((response) => {
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}

let loading;
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "加载中...",
        background: 'rgba(0,0,0,0.2)'
    })
}

function endLoading() {
    loading.close()
}