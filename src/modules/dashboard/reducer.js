export default function DashboardReducer(state = {
    listOfplanets: []
}, action) {
    switch (action.type) {
        case 'SEARCH_PLANET_RESPONSE':
            {
                return Object.assign({}, state, { listOfplanets: action.payload });
            }
        default:
            return state;
    }
}
