import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteOnAnecdote } from '../reducers/anecdoteReducer';
import { notificationChange, notificationRemoval } from '../reducers/notificationReducer';

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

    const handleVote = (anecdote) => {
        dispatch(voteOnAnecdote(anecdote.id));
        dispatch(notificationChange(`You voted '${anecdote.content}'`));
        setTimeout(() => dispatch(notificationRemoval()), 5000);
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
