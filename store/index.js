import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {counter} from './reducer';

const rootReducer = combineReducers({
    counter,
    // fetchPosts,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
