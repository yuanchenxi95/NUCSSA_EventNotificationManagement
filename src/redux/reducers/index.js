import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './Auth.Reducer';
// import authCurrentUser from './Auth.CurrentUser.Reducer';
// import authLogout from './Auth.Logout.Reducer';
// import userProfile from './User.Profile.Reducer';
// import createEvent from './Create.Events.Reducer';
import { eventsReducer } from './Events.Reducer';

const rootReducer = combineReducers({
    auth,
    eventsReducer,
    routerReducer
});

export default rootReducer;