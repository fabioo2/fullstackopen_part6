import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// ? Question: Is this right? The actual course material doesn't actually go over how to 'move defining the store to a file called store.js'
