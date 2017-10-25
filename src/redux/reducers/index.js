import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './Auth.Reducer';
// import authCurrentUser from './Auth.CurrentUser.Reducer';
// import authLogout from './Auth.Logout.Reducer';
// import userProfile from './User.Profile.Reducer';
// import createEvent from './Create.Events.Reducer';
import { eventReducer } from './Event';

const rootReducer = combineReducers({
    authReducer,
    eventReducer,
    routerReducer
});

export default rootReducer;