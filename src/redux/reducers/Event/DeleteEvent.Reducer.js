import { Record } from 'immutable';

import {
    DELETE_EVENT,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_ERROR
} from 'src/redux/actions/Event/DeleteEvent.Action';
import { noErrorValue } from 'src/utils';

export const DeleteEventState = new Record({
    isLoading: false,
    success: false,
    error: noErrorValue
});


export function deleteEventReducer(state = new DeleteEventState(), {payload, type}) {
    switch (type) {
        case DELETE_EVENT:
            return state.merge({
                isLoading: true
            });
        case DELETE_EVENT_SUCCESS:
            return state.merge({
                isLoading: false,
                success: true,
                error: noErrorValue
            });
        case DELETE_EVENT_ERROR:
            return state.merge({
                isLoading: false,
                success: false,
                error: payload
            });
        default:
            return state;
    }
}