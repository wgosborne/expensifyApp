//Object Destructuring

console.log('destructuring');

const person = {
    name: 'Wagner',
    age: 21,
    location: {
        city: 'Tuscaloosa',
        temp: 65
    }
};

// const name = person.name;
// const age = person.age;
const { name: firstName = 'Anonymous', age } = person; //setting a defaulr

console.log(`${firstName} is ${age}`);


const { town, temp: temperature } = person.location;

if (town && temperature) {
    console.log(`It's ${temperature} in ${town}`);
}



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , , USstate = 'New York'] = address;

console.log(`You are in ${USstate}`);

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumCost, ] = item;

console.log(`a medium ${name} costs ${mediumCost}`)