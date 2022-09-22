import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAZ48OWQANeBNVuAOhCGRal6_Ek3Dv4dbo",
    authDomain: "aula-20-09-c86ad.firebaseapp.com",
    databaseURL: "https://aula-20-09-c86ad-default-rtdb.firebaseio.com",
    projectId: "aula-20-09-c86ad",
    storageBucket: "aula-20-09-c86ad.appspot.com",
    messagingSenderId: "262090732640",
    appId: "1:262090732640:web:4936acb47a354bf9147f05",
    measurementId: "G-MBSQRK7B90"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;