import axios, { AxiosPromise } from 'axios';
import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';
import config from '../config';

const Axios = axios.create({
    baseURL: config.baseURL,
    timeout: 20000,
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
        endLoading();
        return Promise.reject(err);
    }
);

export const get = (url: string, params = {}): AxiosPromise => {
    return new Promise((resolve, reject) => {
        Axios.get(url, { params }).then((res) => {
            resolve(res);
        }, err => {
            reject(err);
        })
    })
}

export const post = (url: string, data = {}): AxiosPromise => {
    return new Promise((resolve, reject) => {
        Axios.post(url, data).then((response) => {
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}

let loading: null | ILoadingInstance;
function startLoading() {
    loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0,0,0,0.2)'
    })
}

function endLoading() {
    (loading as ILoadingInstance).close()
}
