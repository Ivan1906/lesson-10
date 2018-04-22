import { questionsTypes } from './';

const addQuestion = (title, body, dateCreate) => ({
    type: questionsTypes.ADD_QUESTION,
    title,
    body,
    dateCreate
});

const editQuestion = id => ({
    type: questionsTypes.EDIT_QUESTION,
    id
});

const sortBy = keySort => ({
    type: questionsTypes.SORT_BY,
    keySort
});

const searchQuestion = searchText => ({
    type: questionsTypes.SEARCH_QUESTION,
    searchText
});

const clearSearch = () => ({
    type: questionsTypes.CLEAR_SEARCH
});

export default {
    addQuestion,
    editQuestion,
    sortBy,
    searchQuestion,
    clearSearch
}