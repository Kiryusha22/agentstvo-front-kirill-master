import { makeRequest } from '@/api/makeRequest.js'
export const register = async (name, surname, patronymic, login, password, email, birth, phone_number) => {
    const response = await makeRequest(
        '/register',
        'POST',
        JSON.stringify({
            name,
            surname,
            patronymic,
            login,
            password,
            email,
            birth,
            phone_number
        })
    )

    return response.json()
}