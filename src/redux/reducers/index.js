import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from './Auth.Reducer';
import { eventReducer } from './Event';

const rootReducer = combineReducers({
    authReducer,
    eventReducer,
    routerReducer
});

export default rootReducer;