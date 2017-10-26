import { firebaseRef }  from 'src/firebase';
import { firebaseTransformObjectToArray } from 'src/redux/utils';

export const LOAD_EVENT_LIST = 'LOAD_EVENT_LIST';
export const LOAD_EVENT_LIST_SUCCESS = 'LOAD_EVENT_LIST_SUCCESS';
export const LOAD_EVENT_LIST_ERROR = 'LOAD_EVENT_LIST_ERROR';
export const UNLOAD_EVENT_LIST = 'UNLOAD_EVENT_LIST';

export const loadEventList = () => {
    return dispatch => {
        dispatch(loadEventListAction());
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .on(
                "value",
                (snapshot) => {
                    let events = firebaseTransformObjectToArray(snapshot.val());
                    dispatch(loadEventListFulfilledAction(events));
                }
            );
    };

};

export const unloadEventList = () => {
    return dispatch => {
        dispatch(unloadEventListAction());
        let eventsRef = firebaseRef.child(`/events`);

        eventsRef
            .off(
                "value"
            );
    };
};

export const loadEventListAction = () => {
    return {
        type: LOAD_EVENT_LIST
    };
};

export const loadEventListFulfilledAction = (events) => {
    return {
        type: LOAD_EVENT_LIST_SUCCESS,
        payload: events
    };
};

export const loadEventListRejectedAction = (error) => {
    return {
        type: LOAD_EVENT_LIST_ERROR,
        payload: error
    };
};

export const unloadEventListAction = () => {
    return {
        type: UNLOAD_EVENT_LIST
    };
};