const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('this is my resolved data'); //can only resolve once and only pass one value
        reject('something went wrong');
    }, 1500)

});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => { //fires when a promise rejects rather than a javascript error
    console.log('error: ', error)
});



console.log('after');