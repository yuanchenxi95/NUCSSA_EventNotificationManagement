import { AUTH_USER, SIGN_OUT_USER, AUTH_ERROR, SAVE_URI } from '../actions/Auth.Action';
import { noErrorValue } from 'src/utils';
import { defaultPrivatePath } from 'src/routes';

const initialState =  {
    authenticated: false,
    error: noErrorValue,
    saved_uri: defaultPrivatePath
};

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true,
                error: noErrorValue
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false,
                error: noErrorValue
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: payload
            };
        case SAVE_URI:
            return {
                ...state,
                saved_uri: payload
            };
        default:
            return state;
    }
};
