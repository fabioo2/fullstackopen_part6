const reducer = (state = [], action) => {
    // console.log('state now: ', state);
    // console.log('action', action);

    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data];
        case 'VOTE_ANECDOTE':
            // const id = action.data.id;
            // const anecdoteToChange = state.find((a) => a.id === id);
            // const changedAnecdote = {
            //     ...anecdoteToChange,
            //     votes: ++anecdoteToChange.votes,
            // };
            const changedAnecdote = action.anecdote;
            return state.map((anecdote) => (anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote));
        case 'INIT_ANECDOTES':
            return action.data;
        default:
            return state;
    }
};

export const voteOnAnecdote = (anecdote) => {
    return {
        type: 'VOTE_ANECDOTE',
        anecdote,
    };
};

export const createAnecdote = (data) => {
    return {
        type: 'NEW_ANECDOTE',
        data,
    };
};

export const initializeAnecdotes = (anecdotes) => {
    return {
        type: 'INIT_ANECDOTES',
        data: anecdotes,
    };
};

export default reducer;
