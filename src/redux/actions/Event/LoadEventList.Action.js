import { firebaseRef }  from 'src/firebase';
import { firebaseTransformObjectToArray } from 'src/redux/utils';

export const LOAD_EVENT_LIST = 'LOAD_EVENT_LIST';
export const LOAD_EVENT_LIST_SUCCESS = 'LOAD_EVENT_LIST_SUCCESS';
export const LOAD_EVENT_LIST_ERROR = 'LOAD_EVENT_LIST_ERROR';

export function loadEventList() {
    return dispatch => {
        loadEventListAction();
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .once(
                "value"
            )
            .then((snapshot) => {
                let events = firebaseTransformObjectToArray(snapshot.val());
                dispatch(loadEventListFulfilledAction(events));
            })
            .catch((error) => {
                dispatch(loadEventListRejectedAction(error.message));
            });
    };

}

export function loadEventListAction() {
    return {
        type: LOAD_EVENT_LIST
    };
}

export function loadEventListFulfilledAction(events) {
    return {
        type: LOAD_EVENT_LIST_SUCCESS,
        payload: events
    };
}

export function loadEventListRejectedAction(error) {
    return {
        type: LOAD_EVENT_LIST_ERROR,
        payload: error
    };
}
