import firebase from 'firebase';

try {
    let config = {
        apiKey: "AIzaSyDt3AkkrLfrnDz7Fjc-sAv-Ulu_44bqc0I",
        authDomain: "mapapp-edeac.firebaseapp.com",
        databaseURL: "https://mapapp-edeac.firebaseio.com",
        projectId: "mapapp-edeac",
        storageBucket: "mapapp-edeac.appspot.com",
        messagingSenderId: "922909471565"
    };
    firebase.initializeApp(config);
} catch (e) {
}

export const firebaseRef = firebase.database().ref();
export default firebase;
