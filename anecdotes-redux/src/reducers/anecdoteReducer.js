import anecdoteService from '../services/anecdotes';

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
            const changedAnecdote = action.data;
            return state.map((anecdote) => (anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote));
        case 'INIT_ANECDOTES':
            return action.data;
        default:
            return state;
    }
};

export const voteOnAnecdote = (anecdote) => {
    return async (dispatch) => {
        const updatedAnecdote = await anecdoteService.update(anecdote);
        dispatch({
            type: 'VOTE_ANECDOTE',
            data: updatedAnecdote,
        });
    };
};

export const createAnecdote = (data) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.createNew(data);
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote,
        });
    };
};

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll();
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes,
        });
    };
};

export default reducer;
