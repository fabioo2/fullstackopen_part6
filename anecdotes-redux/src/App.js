import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteOnAnecdote } from './reducers/anecdoteReducer';
import NewAnecdote from './components/NewAnecdote';

const App = () => {
    const anecdotes = useSelector((state) => state);
    console.log(anecdotes);
    const dispatch = useDispatch();

    const vote = (id) => {
        // console.log('vote', id);
        dispatch(voteOnAnecdote(id));
    };

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
            <NewAnecdote />
        </div>
    );
};

export default App;
