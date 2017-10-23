import firebase, { firebaseRef } from '../../firebase';

export const EVENT_CREATE = "USER_PROFILE_UPDATE";
export const EVENT_CREATE_REJECTED = 'USER_PROFILE_UPDATE_REJECTED';
export const EVENT_CREATE_FULFILLED = 'USER_PROFILE_UPDATE_FULFILLED';

export function createEvent(event) {
    return dispatch => {
        dispatch(createEventAction());
        let userProfileRef = firebaseRef.child(`/events`);

        userProfileRef
            .set(
                event
            )
            .then(() => {
                dispatch(createEventFulfilledAction(event));
            })
            .catch((err) => {
                console.log(err);
                dispatch(createEventRejectedAction(err));
            });
    };
}

function createEventAction() {
    return {
        type: EVENT_CREATE
    };
}

function createEventRejectedAction(error) {
    return {
        type: EVENT_CREATE_REJECTED,
        payload: error
    };
}

function createEventFulfilledAction(profile) {
    return {
        type: EVENT_CREATE_FULFILLED,
        payload: profile
    }
}

