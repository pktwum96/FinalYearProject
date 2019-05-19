import {createStore,applyMiddleware} from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import initialState from './initialState.js';


export const store = createStore(allReducers,initialState,applyMiddleware(thunk));
