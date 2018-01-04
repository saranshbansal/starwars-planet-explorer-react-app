export default function AuthenticationReducer(state = {
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case 'USER_AUTHENTICATION':
            {
                return Object.assign({}, state, { isLoggedIn: action.payload });
            }
        default:
            return state;
    }
}
