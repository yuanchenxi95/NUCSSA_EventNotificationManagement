import { combineReducers } from 'redux';
import { createEventReducer } from './CreateEvent.Reducer';
import { eventListReducer } from './EventList.Reducer';

export const eventReducer = combineReducers({
    createEventReducer,
    eventListReducer
});
