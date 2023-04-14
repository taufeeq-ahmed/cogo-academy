import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://0.0.0.0:8080',
});

instance.interceptors.request.use((config) => {
    console.log("cookies", document?.cookie?.split(';'))
    const token = document?.cookie?.split(';')?.find(cookie => cookie?.trim()?.startsWith('cogoacademytoken='))?.split('=')[1];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
