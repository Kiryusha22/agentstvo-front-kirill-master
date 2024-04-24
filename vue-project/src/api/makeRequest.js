export const makeRequest = async (
    path,
    method = 'GET',
    body = undefined
) => {
    const token = localStorage.getItem('api_token')
    const headers = {
        Authorization: `Bearer ${token}`
    }

    if (! (body instanceof FormData)) {
        headers['Content-Type'] = 'application/json'
    }
}