import { createStore } from 'redux'; //deprecated but still works

const store = createStore((state = { count : 0 }, action) => { 
    switch (action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1; //checking if its a number and if not just setting it to 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1; //checking if its a number and if not just setting it to 1
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: return state;
    }
    // if (action.type === 'INCREMENT'){
    //     return {
    //         count: state.count +1
    //     }
    // } else{
    //     return state;
    // }
});

//subscribe watches for changes and then acts on them
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Action - an object that gets sent to the store. Everytime it dispatches, createStore runs
//Incrementing count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


//Decrementing count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT'
});

//unsubscribe(); //stops printing changes

//Reset count
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});