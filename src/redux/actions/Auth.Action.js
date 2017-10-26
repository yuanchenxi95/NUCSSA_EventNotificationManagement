import firebase  from '../../firebase';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const SAVE_URI = 'SAVE_URI';

export const signInUser = (credentials) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch(authUser());
            })
            .catch(error => {
                dispatch(authError(error.message));
            });
    };
};

export const signOutUser = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() =>{
                dispatch({
                    type: SIGN_OUT_USER
                });
            });
    };
};

export const saveURIBeforeAuth = (uri) => {
    return dispatch => {
        dispatch({
            type: SAVE_URI,
            payload: uri
        });
    };
};


export const verifyAuth = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
            }
        });
    };
};

export const authUser = () => {
    return {
        type: AUTH_USER
    };
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const saveURI = (uri) => {
    return {
        type: SAVE_URI,
        payload: uri
    };
};