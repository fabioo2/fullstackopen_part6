import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import Anecdotes from './components/Anecdotes';
import Notification from './components/Notification';
import Filter from './components/Filter';

import { initializeAnecdotes } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeAnecdotes());
    }, [dispatch]);

    return (
        <div>
            <Notification />
            <Filter />
            <Anecdotes />
            <AnecdoteForm />
        </div>
    );
};

export default App;
