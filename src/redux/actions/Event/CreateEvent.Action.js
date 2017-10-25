import { firebaseRef }  from 'src/firebase';

export const CREATE_EVENT = "CREATE_EVENT";
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';
export const CREATE_EVENT_RESET = 'CREATE_EVENT_RESET';

export function createEvent(event) {
    return dispatch => {
        dispatch(createEventAction());
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .push(
                event
            )
            .then(() => {
                dispatch(createEventFulfilledAction(event));
            })
            .catch((error) => {
                dispatch(createEventRejectedAction(error.message));
            });
    };
}

export function resetCreateEventReducer() {
    return dispatch => {
        dispatch(createEventResetAction());
    };
}

export function createEventAction() {
    return {
        type: CREATE_EVENT
    };
}

export function createEventFulfilledAction(event) {
    return {
        type: CREATE_EVENT_SUCCESS,
        payload: event
    };
}

export function createEventRejectedAction(error) {
    return {
        type: CREATE_EVENT_ERROR,
        payload: error
    };
}

export function createEventResetAction() {
    return {
        type: CREATE_EVENT_RESET
    };
}
