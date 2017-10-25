import { combineReducers } from 'redux';
import { createEventReducer } from './CreateEvent.Reducer';
import { loadEventListReducer } from './LoadEventList.Reducer';
import { deleteEventReducer } from './DeleteEvent.Reducer';

export const eventReducer = combineReducers({
    createEventReducer,
    loadEventListReducer,
    deleteEventReducer
});
