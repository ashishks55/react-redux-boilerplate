import axios from 'axios';

const _axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

_axios.interceptors.request.use((config) => {
    if(sessionStorage.token){
        config.headers.Authorization = `Bearer ${sessionStorage.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

_axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {status} = error.response;
    const { url } = error.response.config;
    if (status === 401) {
        sessionStorage.clear();
        window.location.href = '/';
    }
    return Promise.reject(error);
});
        
export default _axios;