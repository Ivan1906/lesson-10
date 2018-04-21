import { userTypes } from './';
import v4 from 'uuid';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN:
        case userTypes.SIGN_UP:
        case userTypes.FORGOT_PASSWORD:
            return Object.assign({}, 
                state, 
                {
                    id: v4(),
                    email: action.email,
                    password: action.password
                }
            );
        case userTypes.SIGN_OUT:
            return null;
        default:
            return state;
    }
};

export default userReducer;