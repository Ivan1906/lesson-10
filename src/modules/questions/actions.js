import { questionsTypes } from './';

const addQuestion = (title, body) => ({
    type: questionsTypes.ADD_QUESTION,
    title,
    body
});

const editQuestion = (id, title, body) => ({
    type: questionsTypes.EDIT_QUESTION,
    id,
    title,
    body
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