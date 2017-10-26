import { Record } from 'immutable';

import {
    CREATE_EVENT,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    CREATE_EVENT_RESET
} from 'src/redux/actions/Event/CreateEvent.Action';
import { noErrorValue } from 'src/utils';

export const CreateEventState = new Record({
    isLoading: false,
    success: false,
    error: noErrorValue
});

export const createEventReducer = (state = new CreateEventState(), {payload, type}) => {
    switch (type) {
        case CREATE_EVENT:
            return state.merge({
                isLoading: true
            });
        case CREATE_EVENT_SUCCESS:
            return state.merge({
                isLoading: false,
                success: true,
                error: noErrorValue
            });
        case CREATE_EVENT_ERROR:
            return state.merge({
                isLoading: false,
                success: false,
                error: payload
            });
        case CREATE_EVENT_RESET:
            return new CreateEventState();
        default:
            return state;
    }
};