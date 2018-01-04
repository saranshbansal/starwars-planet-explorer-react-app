export default function DashboardReducer(state = {
    counter: 0
}, action) {
    switch (action.type) {
        case 'SEARCH_COUNT_INCREMENT':
            {
                return Object.assign({}, state, { counter: action.payload });
            }
        default:
            return state;
    }
}
