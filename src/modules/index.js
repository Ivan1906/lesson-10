import { combineReducers } from 'redux';

import answers from './answers';
import questions from './questions';
import votes from './votes';
import user from './user';
import search from './search';

export default combineReducers({
    answers,
    questions,
    votes,
    user,
    search,
});