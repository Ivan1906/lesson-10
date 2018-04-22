import { answersTypes } from './';

const addAnswer = (text, questionId, userId) => ({
    type: answersTypes.ADD_ANSWER,
    text,
    questionId,
    userId
});

const sortBy = value => ({
    type: answersTypes.SORT_BY,
    filter: value
});

export default {
    addAnswer,
    addVote,
    sortBy
}