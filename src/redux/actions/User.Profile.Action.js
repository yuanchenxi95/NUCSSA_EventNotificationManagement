import firebase, { firebaseRef } from '../../firebase';

export const USER_PROFILE_UPDATE = "USER_PROFILE_UPDATE";
export const USER_PROFILE_UPDATE_REJECTED = 'USER_PROFILE_UPDATE_REJECTED';
export const USER_PROFILE_UPDATE_FULFILLED = 'USER_PROFILE_UPDATE_FULFILLED';

export const USER_PROFILE_GET = "USER_PROFILE_GET";
export const USER_PROFILE_GET_REJECTED = 'USER_PROFILE_GET_REJECTED';
export const USER_PROFILE_GET_FULFILLED = 'USER_PROFILE_GET_FULFILLED';

export function updateProfile(profile) {
    return dispatch => {
        dispatch(updateProfileAction());
        let userProfileRef = firebaseRef.child(`/profiles/${firebase.auth().currentUser.uid}`);

        userProfileRef.set(
            profile
        )
            .then(() => {

                dispatch(updateProfileFulfilledAction(profile));
            })
            .catch((err) => {
                console.log(err);
                dispatch(updateProfileRejectedAction(err));
            });
    };
}

export function getProfile() {
    return dispatch => {
        dispatch(getProfileAction());
        let userProfileRef = firebaseRef.child(`/profiles/${firebase.auth().currentUser.uid}`);

        userProfileRef.once(
            'value'
        )
            .then((snapshot) => {
                dispatch(getProfileFulfilledAction(snapshot.val()));
            })
            .catch((err) => {
                console.log(err);
                dispatch(getProfileRejectedAction(err));
            });
    };
}

function updateProfileAction() {
    return {
        type: USER_PROFILE_UPDATE
    };
}

function updateProfileRejectedAction(error) {
    return {
        type: USER_PROFILE_UPDATE_REJECTED,
        payload: error
    };
}

function updateProfileFulfilledAction(profile) {
    return {
        type: USER_PROFILE_UPDATE_FULFILLED,
        payload: profile
    }
}


function getProfileAction() {
    return {
        type: USER_PROFILE_GET
    };
}

function getProfileRejectedAction(error) {
    return {
        type: USER_PROFILE_GET_REJECTED,
        payload: error
    };
}

function getProfileFulfilledAction(profile) {
    return {
        type: USER_PROFILE_GET_FULFILLED,
        payload: profile
    }
}