import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteOnAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    );
};

const Anecdotes = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const sortedAnecdotes = useSelector((state) => state.anecdotes.sort((a, b) => b.votes - a.votes));
    const anecdotes = sortedAnecdotes.filter((anecdote) => anecdote.content.includes(filter));

    const handleVote = async (anecdote) => {
        dispatch(voteOnAnecdote(anecdote));
        dispatch(setNotification(`You voted '${anecdote.content}'`, 1));
    };

    return (
        <div>
            {anecdotes.map((anecdote) => (
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote)} />
            ))}
        </div>
    );
};

export default Anecdotes;
