import { firebaseRef }  from 'src/firebase';

export const CREATE_EVENT = "CREATE_EVENT";
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';
export const CREATE_EVENT_RESET = 'CREATE_EVENT_RESET';

export const createEvent = (event) => {
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
};

export const resetCreateEventReducer = () => {
    return dispatch => {
        dispatch(createEventResetAction());
    };
};

export const createEventAction= () => {
    return {
        type: CREATE_EVENT
    };
};

export const createEventFulfilledAction = (event) => {
    return {
        type: CREATE_EVENT_SUCCESS,
        payload: event
    };
};

export const createEventRejectedAction = (error) => {
    return {
        type: CREATE_EVENT_ERROR,
        payload: error
    };
};

export const createEventResetAction= () => {
    return {
        type: CREATE_EVENT_RESET
    };
};
