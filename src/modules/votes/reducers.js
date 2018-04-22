import { votesTypes } from './';
import v4 from 'uuid';

const votesReducer = (state = [], action) => {
    switch(action.type) {
        case votesTypes.ADD_VOTE:
            return [
                ...state,
                {
                    id: v4(),
                    vote: action.typeVote,
                    userId: action.userId,
                    asnwerId: action.asnwerId
                }
            ];
        case votesTypes.REMOVE_VOTE:
            return state.map(vote => {
                if (vote.id !== action.id) return vote;
                return null;
            });
        default:
            return state;
    }
};

export default votesReducer;