import axios from 'axios';

const api = axios.create({
    baseURL: 'https://agria-backend.iyh.me/v1/',
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getDataHomepage = async () => {
    try {
        const response = await api.get('https://agria-backend.iyh.me/v1/menu/homepage');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postDataHomepage = async (data) => {
    try {
        const response = await api.post('https://agria-backend.iyh.me/v1/menu/homepage', data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};