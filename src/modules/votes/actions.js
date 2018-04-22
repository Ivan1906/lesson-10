import { votesTypes } from './';

const addVote = (typeVote = 'like', userId, answerId) => ({
    type: votesTypes.addVote,
    typeVote,
    userId,
    answerId
});

const removeVote = id => ({
    type: votesTypes.REMOVE_VOTE,
    id
});

export default {
    addVote,
    removeVote
}