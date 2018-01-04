export function incrementSearchCount(response) {
    return { type: 'SEARCH_COUNT_INCREMENT', payload: response };
}
