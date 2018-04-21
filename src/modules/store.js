import { createStore, compose, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

const enhancer = compose(
    applyMiddleware(thunk),
    composeWithDevTools(autoRehydrate()),
);

const store = createStore(reducer, undefined, enhancer);

persistStore(store, { whitelist: ['user'] });

export default store;