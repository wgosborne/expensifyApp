import {firebase, googleAuthProvider, microsoftAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startGoogleLogin = () => {
    console.log('logging in action running');
    return firebase.auth().signInWithPopup(googleAuthProvider); //built in, gonna sign in and another page authentication, tried pop up but got errors
    
};

export const startMicrosoftLogin = () => {
    console.log('logging in action running');
    return firebase.auth().signInWithPopup(microsoftAuthProvider); //built in, gonna sign in and another page authentication, tried pop up but got errors
    
};


export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    console.log('logging out action running');
    return firebase.auth().signOut(); //signs out, takes no arguments

};