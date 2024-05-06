import { makeRequest } from '@/api/makeRequest.js'
export const login = async (phone_number) => {
    const response = await makeRequest(
        '/login',
        'POST',
        JSON.stringify({
            phone_number
        })
    )
    return response.json()
}