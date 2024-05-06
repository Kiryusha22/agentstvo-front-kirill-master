import { makeRequest } from '@/api/makeRequest.js'
export const register = async (name, surname, patronymic,phone_number) => {
    const response = await makeRequest(
        '/register',
        'POST',
        JSON.stringify({
            name,
            surname,
            patronymic,
            phone_number
        })
    )

    return response.json()
}