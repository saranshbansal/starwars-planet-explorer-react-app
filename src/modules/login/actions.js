export function authenticateUser(response) {
    return { type: 'USER_AUTHENTICATION', payload: response };
}