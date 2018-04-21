import { userTypes } from './';

const signIn = (email, password) => ({
    type: userTypes.SIGN_IN,
    email: email,
    password: password
});

const signUp = (email, password) => ({
    type: userTypes.SIGN_UP,
    email: email,
    password: password
});

const signOut = () => ({
    type: userTypes.SIGN_OUT
});

const forgotPassword = (email) => ({
    type: userTypes.FORGOT_PASSWORD,
    email: email,
    password: '123'
});

export default { signIn, signUp, signUp, forgotPassword };