import { answersTypes } from './';
import v4 from 'uuid';

const answersReducer = (state = {}, action) => {
    switch (action.type) {
        case answersTypes.ADD_ANSWER:
            return Object.assign({}, state, {
                arrayAnswers: [
                    ...state.arrayAnswers,
                    {
                        id: v4(),
                        text: action.text,
                        questionId: action.questionId,
                        userId: action.userId,
                        vote: null
                    }
                ]
            });
        default:
            return state;
    }
}