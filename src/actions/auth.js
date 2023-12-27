import {firebase, googleAuthProvider} from '../firebase/firebase'

export const startLogin = () => {

    return firebase.auth().signInWithRedirect(googleAuthProvider); //built in, gonna sign in and another page authentication, tried pop up but got errors
    
};

export const startLogout = () => {

    return firebase.auth().signOut(); //signs out, takes no arguments

};