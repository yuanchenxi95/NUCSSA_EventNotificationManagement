import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCSqnvKQSnYZ40MjVUH02LXSC8iHL17InE",
    authDomain: "nucssa-app.firebaseapp.com",
    databaseURL: "https://nucssa-app.firebaseio.com",
    projectId: "nucssa-app",
    storageBucket: "nucssa-app.appspot.com",
    messagingSenderId: "353935712140"
};
firebase.initializeApp(config);

export const firebaseRef = firebase.database().ref();
export default firebase;
