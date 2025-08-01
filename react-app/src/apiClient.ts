import axios from 'axios';

const apiClient = axios.create({
    // baseURL: 'https://music-maker-server.onrender.com/api/',
    baseURL: 'http://localhost:5035/api/',
});

apiClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;