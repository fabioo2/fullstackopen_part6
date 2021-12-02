const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            const filter = action.filter;
            return filter;
        default:
            return state;
    }
};

export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        filter,
    };
};

export default filterReducer;
