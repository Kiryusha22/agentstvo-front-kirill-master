// Функция генерации кода подтверждения
import {API_URL} from "@/config/index.js";

const generateVerificationCode = () => {
    return Math.random().toString(36).substring(2, 8);
};

// Функция отправки запроса на сервер
export const makeRequest = async (
    path,
    method = 'GET',
    body = undefined
) => {
    const token = localStorage.getItem('api_token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    if (!(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    try {
        const response = await fetch(API_URL + path, {
            method,
            headers,
            body
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
};