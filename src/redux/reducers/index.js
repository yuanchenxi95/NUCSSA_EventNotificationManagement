import { combineReducers } from 'redux';
import auth from './Auth.Reducer';
// import authCurrentUser from './Auth.CurrentUser.Reducer';
// import authLogout from './Auth.Logout.Reducer';
// import userProfile from './User.Profile.Reducer';
// import createEvent from './Create.Events.Reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    auth,
    routerReducer
});

export default rootReducer;