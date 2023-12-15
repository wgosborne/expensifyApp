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

/*WORKING WITH ARRAYS*/

database.ref('expenses').push({
    description: 'd',
    note: 'n',
    amount: 'a',
    createdAt: 'c'
});

database.ref('expenses').push({
    description: 'des',
    note: 'no',
    amount: 'amo',
    createdAt: 'crea'
});



database.ref('expenses').push({
    description: 'description',
    note: 'notes',
    amount: 'amount',
    createdAt: 'createdAt'
});


// database.ref('notes/-Nlhuv36mdgUuVeWzoAK').remove()

// database.ref('notes').push({ // generates unique ID, so we use push
//     title: 'couorse',
//     body: 'get it done'
// })

// const fireBaseNotes = {
//     notes: {
//         qwerty: { //id goes in as qwerty
//             title: 'title',
//             body: 'body'
//         },
//         12: {
//             title: 'this title',
//             body: 'this body'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'to do list',
//     body: 'this is my note'
// }, {
//     id: '761ASD',
//     title: 'second note',
//     body: 'note numba 2'
// }];

// database.ref('notes').set(fireBaseNotes);


/*READING DATA*/

// database.ref('name').set('wagner');

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const db = snapshot.val();
//         const job = db.job;
//         console.log(`${db.name} is a ${job.title} at ${db.job.company}`);
// });

// setTimeout(() => {
//     database.ref('name').set('wags');
// }, 1000);

// const onValueChange = database.ref()
//     .on('value', (snapshot) => { // this is a subscription to onchange, returns this function
//         console.log(snapshot.val());
// }, (e) => {
//     console.log('error with data fetching', e); //error handling
// });

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 3500);
// setTimeout(() => {
//     database.ref('age').set(28);
// }, 5000);

// setTimeout(() => {
//     database.ref().off(onValueChange); // unsubscribing, but the next one will still change in the database just not print
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// database.ref('location/city') //fetching using once
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); //val is data
//     }).catch(() => {
//         console.log('error fetching data', e)
//     });

/*SETTING AND UPDATING*/

// database.ref().set({ //ref references a specific part of the database. no argument means root. this structure sets it up as asynchronous
//     name: 'Wagner Osborne', 
//     age: 26,
//     stressLevel: 4,
//     job: {
//         title: 'software dev',
//         company: 'IP'
//     },
//     location: {
//         city: 'tuscaloosa',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed: ', e);
// });

// database.ref().update({ //update only on root level, we need the slash in quotes to update nested value
//     stressLevel: 9,
//     'job/company': 'freelance',
//     'location/city': 'Boston'
// });

//database.ref().set('this is my data'); //new call wipes old data

// database.ref().set({ //this overrides the database rather than updatting age
//     age: 27
// })

// database.ref('age').set(27); //these lines run asynchronously

// database.ref('location/city').set('memphis');

// database.ref('attributes').set({
//     height: "5'9",
//     weight: 150
// }).then(() => {
//     console.log('attributes has been added');
// }).catch((e) => {
//     console.log('error adding attributes: ', e);
// });

// console.log('I made a request to change the data');


/*REMOVING DATA*/

// database.ref() //Removing data using remove
//     .remove()
//     .then(() => {
//         console.log('data was removed');
//     }).catch((e) => {
//         console.log('did not remove data', e);
//     });

// database.ref('isSingle').set(null); //Removing using 