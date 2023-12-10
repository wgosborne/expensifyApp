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

database.ref().set({ //ref references a specific part of the database. no argument means root. this structure sets it up as asynchronous
    name: 'Wagner Osborne', 
    age: 26,
    isSingle: true,
    location: {
        city: 'tuscaloosa',
        country: 'USA'
    }
}).then(() => {
    console.log('data is saved');
}).catch((e) => {
    console.log('this failed: ', e);
});

//database.ref().set('this is my data'); //new call wipes old data

// database.ref().set({ //this overrides the database rather than updatting age
//     age: 27
// })

// database.ref('age').set(27); //these lines run asynchronously

// database.ref('location/city').set('memphis');

database.ref('attributes').set({
    height: "5'9",
    weight: 150
}).then(() => {
    console.log('attributes has been added');
}).catch((e) => {
    console.log('error adding attributes: ', e);
});

console.log('I made a request to change the data');