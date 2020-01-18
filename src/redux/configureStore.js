import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import thunk from 'redux-thunk';

const intialState= {};
 const middleware = [thunk];

const configureStore = createStore(rootReducer, 
    intialState, 
    applyMiddleware(...middleware));

export default  configureStore;