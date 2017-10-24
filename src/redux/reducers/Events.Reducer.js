import { List, Record } from 'immutable';
import {
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    LOAD_EVENT_SUCCESS,
    LOAD_EVENT_ERROR
} from '../actions/Events.Action';


export const EventsState = new Record({
    isSuccess: false,
    error: "",
    events: new List()
});


export function eventsReducer(state = new EventsState(), {payload, type}) {
    switch (type) {
        case CREATE_EVENT_SUCCESS:
            return state.merge({
                events: state.list.unshift(payload),
                isSuccess: true
            });
        case CREATE_EVENT_ERROR:
            return state.merge({
                error: payload
            });
        case LOAD_EVENT_SUCCESS:
            return state.merge({
                events: new List(payload.reverse()),
                isSuccess: true
            });
        case LOAD_EVENT_ERROR:
            return state.merge({
                error: payload
            });
        default:
            return state;
    }
}