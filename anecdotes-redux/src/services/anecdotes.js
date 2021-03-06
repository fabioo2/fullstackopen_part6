import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createNew = async (content) => {
    const object = { content, votes: 0 };
    const response = await axios.post(baseUrl, object);
    return response.data;
};

const update = async (anecdote) => {
    console.log(anecdote);
    // ? can i do this here or should this be done in the reducer?
    const updatedAnecdote = { ...anecdote, votes: ++anecdote.votes };

    const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote);
    return response.data;
};

const anecdoteService = { getAll, createNew, update };

export default anecdoteService;
