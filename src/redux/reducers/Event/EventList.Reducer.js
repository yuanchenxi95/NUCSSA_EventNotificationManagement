import { List, Record } from 'immutable';

import {
    LOAD_EVENT_LIST,
    LOAD_EVENT_LIST_ERROR,
    LOAD_EVENT_LIST_SUCCESS
} from 'src/redux/actions/Event/LoadEventList.Action';
import { noErrorValue } from 'src/utils';

export const CreateEventListState = new Record({
    isLoading: false,
    success: false,
    error: noErrorValue,
    eventList: new List()
});


export function eventListReducer(state = new CreateEventListState(), {payload, type}) {
    switch (type) {
        case LOAD_EVENT_LIST:
            return state.merge({
                isLoading: true,
                success: false,
                error: noErrorValue,
                eventList: new List()
            });
        case LOAD_EVENT_LIST_SUCCESS:
            return state.merge({
                isLoading: false,
                success: true,
                error: noErrorValue,
                eventList: new List(payload)
            });
        case LOAD_EVENT_LIST_ERROR:
            return state.merge({
                isLoading: false,
                success: false,
                error: payload,
                eventList: new List()
            });
        default:
            return state;
    }
}