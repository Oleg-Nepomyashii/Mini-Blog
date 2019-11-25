import { 
	createStore, 
	combineReducers, 
	applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import postReducer from '../Reducers/post_reducer';

const allReducers = combineReducers({
	postPage: postReducer
})

const store = createStore( allReducers , applyMiddleware(thunkMiddleware) );

window.store = store;

export default store;