import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCi71mX6QeDYiUqZu_QQEnzSigLqh1vOdA",
    authDomain: "expensify-1c07f.firebaseapp.com",
    databaseURL: "https://expensify-1c07f-default-rtdb.firebaseio.com",
    projectId: "expensify-1c07f",
    storageBucket: "expensify-1c07f.appspot.com",
    messagingSenderId: "91487209641",
    appId: "1:91487209641:web:7f51f21ff4576f00b681b8",
    measurementId: "G-5YVVHW6XYY"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };