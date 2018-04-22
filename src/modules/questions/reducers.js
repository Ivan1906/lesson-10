import { questionsTypes } from './';
import v4 from 'uuid';

const sortByKey = (array, key) => array.sort((a, b) => 
    (a[key] > b[key]) ? -1 : (a[key] < b[key]) ? 1 : 0);

const searchQuestions = (array, searchText) => array.map(question => {
    if (question.title.include(searchText)) return question;
});

const questionsReducer = (state = [], action) => {
    switch(action.type) {
        case questionsTypes.ADD_QUESTION:
            return Object.assign({}, state, {
                arrayQuestions: [
                    ...state.arrayQuestions,
                    {
                        id: v4(),
                        title: action.title,
                        body: action.body,
                        dateCreate: action.dateCreate
                    }
                ]
            });
        case questionsTypes.EDIT_QUESTION:
        case questionsTypes.SEARCH_QUESTION:
            return Object.assign({}, state, {
                arrayQuestions: searchQuestions(state.arrayQuestions, action.searchText),
                questionSearch: action.searchText
            });
        case questionsTypes.CLEAR_SEARCH:
            return Object.assign({}, state, {
                // DB get all qusetions
                arrayQuestions: [],
                questionSearch: ''
            });
        case questionsTypes.SORT_BY:
            return Object.assign({}, state, {
                arrayQuestions: sortByKey(state.arrayQuestions, action.keySort),
                questionSort: action.keySort
            });
        default:
            return state;
    }
};

export default questionsReducer;