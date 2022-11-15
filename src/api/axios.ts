import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { setIsExit } from 'slices/menuSlice';
import { setMessage } from 'slices/modalSlice';

import { store } from 'app/store';

declare module 'axios' {
    export interface AxiosRequestConfig {
        retry?: boolean;
        fileFlag?: boolean;
    }
}

const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000
});

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
// instance.defaults.withCredentials = true; // 토큰방식이 아닌 세션을 사용할 경우

// axios 헤더 설정
instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers) {
        if (config.fileFlag === true) {
            config.headers['Content-Type'] = 'multipart/form-data';
            delete config.fileFlag;
        }

        const { accessToken } = store.getState().login;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
    }

    return config;
});

// 토큰 만료 시 재발급 및 재요청
let isTokenRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => refreshSubscribers.map((callback) => callback(accessToken));
const addRefreshSubscriber = (callback: (accessToken: string) => void) => refreshSubscribers.push(callback);

// 응답 처리
instance.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (res: AxiosResponse<any>) => res,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err: AxiosError<any>) => {
        const { dispatch } = store;

        const errorObject = {
            title: '일시적인 오류',
            statusCode: err.response?.status || 500,
            message:
                err.response?.data?.message ||
                '다시 시도해 주세요. \n동일한 오류가 지속된다면 관리자에게 문의해 주세요.'
        };

        if (err.message === 'Network Error') {
            errorObject.title = '네트워크 오류';
        }

        // access_token 만료
        const originalRequest = err.config;
        if (err.response?.status === 401 && !originalRequest.retry) {
            // axios.defaults.withCredentials = true; // 토큰방식이 아닌 세션을 사용할 경우

            // token 토큰 재발급
            if (isTokenRefreshing === false) {
                isTokenRefreshing = true;

                axios
                    .post(`${process.env.REACT_APP_BASE_URL}/web/example/token/refresh`)
                    .then((res) => res.data)
                    .then(({ result }) => {
                        // Access Token 재설정하기
                        const { accessToken } = result;

                        // refreshSubscribers 에 들어있는 있는 콜백들을 새로운 토큰으로 순차적 실행
                        onTokenRefreshed(accessToken);
                    })
                    .catch(async () => {
                        await axios.post(`${process.env.REACT_APP_BASE_URL}/web/example/logout`).finally(() => {
                            dispatch(setIsExit(false));
                            dispatch(setMessage({ message: '세션이 만료되었습니다.', statusCode: 401 }));
                        });
                    })
                    .finally(() => {
                        refreshSubscribers = [];
                        isTokenRefreshing = false;
                    });
            }

            // refreshSubscribers 에 토큰을 인자로 받는 콜백함수 추가
            const retryOriginalRequest = new Promise((resolve) => {
                addRefreshSubscriber((accessToken: string) => {
                    originalRequest.headers!.Authorization = `Bearer ${accessToken}`;
                    resolve(
                        axios(originalRequest)
                            .then((res) => res.data)
                            .catch((error) => {
                                const errorObject = {
                                    title: '일시적인 오류',
                                    statusCode: error.response?.status || 500,
                                    message:
                                        error.response?.data?.message ||
                                        '다시 시도해주세요. \n동일한 오류가 지속된다면 관리자에게 문의해주세요.'
                                };

                                if (error.message === 'Network Error') {
                                    errorObject.title = '네트워크 오류';
                                }

                                return Promise.reject(errorObject);
                            })
                    );
                });
            });

            originalRequest.retry = true;
            return retryOriginalRequest;
        }

        return Promise.reject(errorObject);
    }
);

export default instance;
