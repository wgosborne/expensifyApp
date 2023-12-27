import {firebase, googleAuthProvider} from '../firebase/firebase'

export const startLogin = () => {

    return firebase.auth().signInWithRedirect(googleAuthProvider); //built in, gonna sign in and pop up authentication
    
};