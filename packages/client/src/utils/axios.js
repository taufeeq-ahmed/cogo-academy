import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.PUBLIC_SERVER_URL,
});

instance.interceptors.request.use((config) => {
    const token = document?.cookie?.split(';')?.find(cookie => cookie?.trim()?.startsWith('cogoacademytoken='))?.split('=')[1];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
