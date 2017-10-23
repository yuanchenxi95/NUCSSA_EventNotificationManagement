import {
    USER_PROFILE_UPDATE,
    USER_PROFILE_UPDATE_FULFILLED,
    USER_PROFILE_UPDATE_REJECTED,
    USER_PROFILE_GET,
    USER_PROFILE_GET_FULFILLED,
    USER_PROFILE_GET_REJECTED
} from '../actions/User.Profile.Action';

export default function(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_UPDATE:
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        case USER_PROFILE_UPDATE_FULFILLED:
            return Object.assign({}, state, {
                inProgress: false,
                error: "",
                success: 'OK',
                profile: action.payload
            });
        case USER_PROFILE_UPDATE_REJECTED:
            return Object.assign({}, state, {
                inProgress: false,
                error: action.payload,
                success: '',
            });
        case USER_PROFILE_GET:
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        case USER_PROFILE_GET_FULFILLED:
            return Object.assign({}, state, {
                inProgress: false,
                error: '',
                success: 'OK',
                profile: action.payload

            });
        case USER_PROFILE_GET_REJECTED:
            return Object.assign({}, state, {
                inProgress: false,
                error: action.payload,
                success: ''
            });
        default:
            return state;
    }
}