import { firebaseRef }  from 'src/firebase';

export const DELETE_EVENT = "DELETE_EVENT";
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_ERROR = 'DELETE_EVENT_ERROR';

export const deleteEvent = (eventID) => {
    return dispatch => {
        dispatch(createEventAction());
        let eventRef = firebaseRef.child(`/events/${eventID}`);

        eventRef
            .remove()
            .then(() => {
                dispatch(createEventFulfilledAction(event));
            })
            .catch((error) => {
                dispatch(createEventRejectedAction(error.message));
            });
    };
};

export const createEventAction = () => {
    return {
        type: DELETE_EVENT
    };
};

export const createEventFulfilledAction = (event) => {
    return {
        type: DELETE_EVENT_SUCCESS,
        payload: event
    };
};

export const createEventRejectedAction = (error) => {
    return {
        type: DELETE_EVENT_ERROR,
        payload: error
    };
};