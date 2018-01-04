export default function AuthenticationReducer(state = {
    user: null,
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case 'USER_AUTHENTICATION':
            {
                return Object.assign({}, state, { isLoggedIn: action.payload });
            }
        case 'STORE_USER_DETAILS':
            {
                return Object.assign({}, state, { user: action.payload });
            }
        default:
            return state;
    }
}
