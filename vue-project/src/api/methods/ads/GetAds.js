import { makeRequest } from "@/api/makeRequest.js";

const GetAds = async () => {
    const response = await makeRequest('/advertisement/search');

    if (!response.ok) {
        throw new Error(`Ошибка при получении продуктов: ${response.statusText}`);
    }

    return response.json(); // Конвертация ответа в JSON
};

export default GetAds;
