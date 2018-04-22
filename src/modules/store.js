import { createStore, compose, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import API_JsonServer from '../utils/dbJsonServer';

import reducer from './';

console.log(API_JsonServer().get('questions'));

const InitState = {
    answers: {
        arrayAnswers: [],
        sortBy: 'createAt'
    },
    questions: {
        arrayQuestions: [],
        sortBy: '',
        searchQuestions: ''
    },
    user: null,
    votes: []
}

const enhancer = compose(
    applyMiddleware(thunk),
    composeWithDevTools(autoRehydrate()),
);

const store = createStore(reducer, InitState, enhancer);

persistStore(store, { whitelist: ['user'] });

export default store;