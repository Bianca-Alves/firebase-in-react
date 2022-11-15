import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAQM75-QyLMdzgnRHzJurVC9SlfPOn2XCo",
    authDomain: "aula2009-f5903.firebaseapp.com",
    databaseURL: "https://aula-20-09-c86ad-default-rtdb.firebaseio.com/",
    projectId: "aula2009-f5903",
    storageBucket: "aula2009-f5903.appspot.com",
    messagingSenderId: "341987937181",
    appId: "1:341987937181:web:60e6665e268c3581c33d74",
    measurementId: "G-9BSTCV1SYD"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;