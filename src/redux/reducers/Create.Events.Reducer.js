import {
    EVENT_CREATE,
    EVENT_CREATE_FULFILLED,
    EVENT_CREATE_REJECTED
} from '../actions/Create.Events.Action';

export default function(state = {}, action) {
    switch (action.type) {
        case EVENT_CREATE:
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        case EVENT_CREATE_FULFILLED:
            return Object.assign({}, state, {
                inProgress: false,
                error: '',
                success: 'OK',
                event: action.payload
            });
        case EVENT_CREATE_REJECTED:
            return Object.assign({}, state, {
                inProgress: false,
                error: action.payload,
                success: '',
            });
        default:
            return state;
    }
}