// Определение функции generateVerificationCode
const generateVerificationCode = () => {
    return Math.random().toString(36).substring(2, 8);
};

// Импорт функции makeRequest из вашего кода
import { makeRequest } from '@/api/makeRequest.js'

// Ваша функция register с небольшими изменениями
export const register = async (userData) => {
    const response = await makeRequest(
        '/register',
        'POST',
        JSON.stringify(userData)
    );

    return response.json();
}