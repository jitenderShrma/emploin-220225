import {legacy_createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

export default legacy_createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);



