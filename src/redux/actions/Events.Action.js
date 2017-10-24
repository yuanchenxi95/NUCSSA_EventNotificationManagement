import { firebaseRef }  from '../../firebase';
import { firebaseTransformObjectToArray } from '../utils';

export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';

export const LOAD_EVENT_SUCCESS = 'LOAD_EVENT_SUCCESS';
export const LOAD_EVENT_ERROR = 'LOAD_EVENT_ERROR';


export function createEvent(event) {
    return dispatch => {
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .set(
                event
            )
            .then(() => {
                dispatch(createEventFulfilledAction(event));
            })
            .catch((err) => {
                dispatch(createEventRejectedAction(err));
            });
    };

}

export function loadEvents() {
    return dispatch => {
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .once(
                "value"
            )
            .then((snapshot) => {
                let events = firebaseTransformObjectToArray(snapshot.val());
                dispatch(loadEventsFulfilledAction(events));
            })
            .catch((err) => {
                dispatch(loadEventsRejectedAction(err));
            });
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

export function loadEventsFulfilledAction(events) {
    return {
        type: LOAD_EVENT_SUCCESS,
        payload: events
    };
}

export function loadEventsRejectedAction(error) {
    return {
        type: LOAD_EVENT_ERROR,
        payload: error
    };
}

// export function removeTask(task) {
//     return dispatch => {
//         taskList.remove(task.key)
//             .catch(error => dispatch(removeTaskError(error)));
//     };
// }
//
// export function removeTaskError(error) {
//     return {
//         type: REMOVE_TASK_ERROR,
//         payload: error
//     };
// }
//
// export function removeTaskSuccess(task) {
//     return {
//         type: REMOVE_TASK_SUCCESS,
//         payload: task
//     };
// }
